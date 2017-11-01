(function () {

  var forEach = Array.prototype.forEach;

  function addEventHandler(event, func, useCapture) {
    if (this.addEventListener) {
      this.addEventListener(event, func, useCapture);
    } else if (this.attachEvent) {
      this.attachEvent('on' + event, func);
    } else {
      this['on' + event] = func;
    }
  }

  var handle = {
    nav: document.querySelector('#j_nav'),
    init: function () {
      this.initView();
      this.initEvent();
    },
    initView: function () {
      if (location.hash && document.querySelector(location.hash)) {
        this.activeNavItem(this.nav, location.hash);
      } else {
        this.activeNavItem(this.nav);
      }
    },
    initEvent: function () {
      let self = this;
      const events = {};
      events['dxy-tree-content'] = function (thisNode) {
        const treeNode = thisNode.parentNode;
        treeNode.classList.toggle('dxy-tree-expanded');
      };
      addEventHandler.call(document.querySelector('#j_content'), 'scroll', function (e) {
        self.activeNavItem(self.nav);
      });
      forEach.call(document.querySelectorAll('.dxy-tree'), treeNode => {
        addEventHandler.call(treeNode, 'click', function (e) {
          let node = e.target;
          while (node !== treeNode) {
            Object.keys(events).forEach(event => {
              if (node.className && node.className.indexOf(event) > -1 && node.className.indexOf('active') === -1) {
                events[event](node);
              }
            });
            node = node.parentNode;
          }
        });
      });

      forEach.call(document.querySelectorAll('.j_preview_code'), node => {
        addEventHandler.call(node, 'click', function (e) {
          let target = e.currentTarget;
          let child = target.querySelector('span');
          child.innerText = child.innerText.replace(/查看|收起/, function (word) {
            return word === '查看' ? '收起' : '查看';
          });
          target.parentNode.classList.toggle('fold');
          let pre = target.parentNode.querySelector('pre');
          pre.style.height = parseFloat(pre.style.height) > 0 ? 0 : pre.querySelector('code').offsetHeight + 'px';
        });
      });
    },

    // 滚动和导航栏显示绑定
    activeNavItem: function (nav, anchor) {
      let self = this;
      let offsetTop = document.querySelector('#j_content').offsetTop;
      let scrollTop = document.querySelector('#j_content').scrollTop;
      let clientHeight = document.querySelector('#j_content').clientHeight;
      let scrollHeight = document.querySelector('#j_content').scrollHeight;
      if (!anchor) {
        let treeNodes = nav.querySelectorAll('.dxy-tree-content');
        if (scrollTop === scrollHeight - clientHeight) {
          let allLink = nav.querySelectorAll('.dxy-tree-content a');
          anchor = allLink[allLink.length - 1].getAttribute('href');
        } else {
          for (let i = 0; i < treeNodes.length; i++) {
            let treeNode = treeNodes[i];
            let id = treeNode.querySelector('a').getAttribute('href');
            let target = document.querySelector(id);
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
      let navTarget = nav.querySelector('a[href="' + anchor + '"]').parentNode;
      if (navTarget.offsetTop - offsetTop < nav.scrollTop) {
        nav.scrollTop = navTarget.offsetTop - offsetTop;
      } else if (navTarget.offsetTop + navTarget.clientHeight - offsetTop - clientHeight > nav.scrollTop) {
        nav.scrollTop = navTarget.offsetTop + navTarget.clientHeight  - offsetTop - clientHeight;
      }

      // nav.querySelector('a[href="' + anchor + '"]').parentNode.classList.add('active-leaf');
      let items = anchor.replace('#', '').split('_');
      let names = [];

      // 顶部tab切换active
      forEach.call(document.querySelectorAll('#j_tab > li'), li => {
        li.classList.remove('active');
      });
      document.querySelector('#j_tab a[href="#' + items[0] + '"]').parentNode.classList.add('active');


      items.forEach(item => {
        names.push(item);
        let target = nav.querySelector('a[href="#' + names.join('_') + '"]');
        let treeNode = target.parentNode.parentNode;
        target.parentNode.classList.add('active');
        treeNode.classList.add('dxy-tree-expanded');

        // 清除该树节点的子节点和兄弟节点的样式
        if (treeNode.querySelector('.dxy-tree-children')) {
          forEach.call(treeNode.querySelector('.dxy-tree-children').querySelectorAll('.dxy-tree-content.active'), item => {
            item.classList.remove('active');
            // item.classList.remove('active-leaf');
            item.parentNode.classList.remove('dxy-tree-expanded');
          });
        }
        let siblings = treeNode.parentNode.children;
        for (let i = 0; i < siblings.length; i++) {
          let node = siblings[i];
          if (node !== treeNode && node.querySelector('.dxy-tree-content.active')) {
            forEach.call(node.querySelectorAll('.dxy-tree-content.active'), item => {
              item.classList.remove('active');
              // item.classList.remove('active-leaf');
              if (item.parentNode.parentNode !== self.nav) {
                item.parentNode.classList.remove('dxy-tree-expanded');
              }
            });
          }
        }
      });
    }
  };

  handle.init();

}());