/* eslint-disable no-loop-func */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
(function () {
  const { forEach } = Array.prototype;

  function addEventHandler(event, func, useCapture) {
    if (this.addEventListener) {
      this.addEventListener(event, func, useCapture);
    } else if (this.attachEvent) {
      this.attachEvent(`on${event}`, func);
    } else {
      this[`on${event}`] = func;
    }
  }

  const handle = {
    nav: document.querySelector('#j_nav'),
    init() {
      this.initView();
      this.initEvent();
    },
    initView() {
      if (window.location.hash && document.querySelector(window.location.hash)) {
        this.activeNavItem(this.nav, window.location.hash);
      } else {
        this.activeNavItem(this.nav);
      }
    },
    initEvent() {
      const self = this;
      const events = {};
      events['dxy-tree-content'] = function (thisNode) {
        const treeNode = thisNode.parentNode;
        treeNode.classList.toggle('dxy-tree-expanded');
      };
      addEventHandler.call(document.querySelector('#j_content'), 'scroll', () => {
        self.activeNavItem(self.nav);
      });
      forEach.call(document.querySelectorAll('.dxy-tree'), (treeNode) => {
        addEventHandler.call(treeNode, 'click', (e) => {
          let node = e.target;
          while (node !== treeNode) {
            Object.keys(events).forEach((event) => {
              if ({}.hasOwnProperty.call(node, 'className')) {
                if (node.className.indexOf(event) > -1 && node.className.indexOf('active') === -1) {
                  events[event](node);
                }
              }
            });
            node = node.parentNode;
          }
        });
      });

      forEach.call(document.querySelectorAll('.j_preview_code'), (node) => {
        addEventHandler.call(node, 'click', (e) => {
          const target = e.currentTarget;
          const child = target.querySelector('span');
          child.innerText = child.innerText.replace(/查看|收起/, word => (word === '查看' ? '收起' : '查看'));
          target.parentNode.classList.toggle('fold');
          const pre = target.parentNode.querySelector('pre');
          pre.style.height = parseFloat(pre.style.height) > 0 ? 0 : `${pre.querySelector('code').offsetHeight}px`;
        });
      });
    },

    // 滚动和导航栏显示绑定
    activeNavItem(nav, anchor) {
      const self = this;
      const {
        offsetTop, scrollTop, clientHeight, scrollHeight,
      } = document.querySelector('#j_content');
      if (!anchor) {
        const treeNodes = nav.querySelectorAll('.dxy-tree-content');
        if (scrollTop === scrollHeight - clientHeight) {
          const allLink = nav.querySelectorAll('.dxy-tree-content a');
          anchor = allLink[allLink.length - 1].getAttribute('href');
        } else {
          for (let i = 0; i < treeNodes.length; i += 1) {
            const treeNode = treeNodes[i];
            const id = treeNode.querySelector('a').getAttribute('href');
            const target = document.querySelector(id);
            if (target.offsetTop - offsetTop - 40 > scrollTop) {
              // if (nav.querySelector('.dxy-tree-content.active')) {
              //   nav.querySelector('.dxy-tree-content.active').classList.remove('active');
              // }
              // treeNode.classList.add('active');
              break;
            }
            anchor = id;
          }
        }
      }

      // 改变导航栏高亮时，如果高亮元素没显示，则滚动到高亮元素的位置
      const navTarget = nav.querySelector(`a[href="${anchor}"]`).parentNode;
      if (navTarget.offsetTop - offsetTop < nav.scrollTop) {
        nav.scrollTop = navTarget.offsetTop - offsetTop;
      } else if ((navTarget.offsetTop + navTarget.clientHeight - offsetTop - clientHeight) > nav.scrollTop) {
        nav.scrollTop = navTarget.offsetTop + navTarget.clientHeight - offsetTop - clientHeight;
      }

      if (nav.querySelector('.active-leaf')) {
        nav.querySelector('.active-leaf').classList.remove('active-leaf');
      }
      nav.querySelector(`a[href="${anchor}"]`).parentNode.classList.add('active-leaf');
      const items = anchor.replace('#', '').split('_');
      const names = [];

      // 顶部tab切换active
      forEach.call(document.querySelectorAll('#j_tab > li'), (li) => {
        li.classList.remove('active');
      });
      document.querySelector(`#j_tab a[href="#${items[0]}"]`).parentNode.classList.add('active');


      items.forEach((item) => {
        names.push(item);
        const target = nav.querySelector(`a[href="#${names.join('_')}"]`);
        const treeNode = target.parentNode.parentNode;
        target.parentNode.classList.add('active');
        treeNode.classList.add('dxy-tree-expanded');

        // 清除该树节点的子节点和兄弟节点的样式
        if (treeNode.querySelector('.dxy-tree-children')) {
          forEach.call(treeNode.querySelector('.dxy-tree-children').querySelectorAll('.dxy-tree-content.active'), (item0) => {
            item0.classList.remove('active');
            // item0.classList.remove('active-leaf');
            item0.parentNode.classList.remove('dxy-tree-expanded');
          });
        }
        const siblings = treeNode.parentNode.children;
        for (let i = 0; i < siblings.length; i += 1) {
          const node = siblings[i];
          if (node !== treeNode && node.querySelector('.dxy-tree-content.active')) {
            forEach.call(node.querySelectorAll('.dxy-tree-content.active'), (item1) => {
              item1.classList.remove('active');
              // item1.classList.remove('active-leaf');
              if (item1.parentNode.parentNode !== self.nav) {
                item1.parentNode.classList.remove('dxy-tree-expanded');
              }
            });
          }
        }
      });
    },
  };

  handle.init();
}());
