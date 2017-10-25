(function () {

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
      window.onscroll = function (e) {
        self.activeNavItem(self.nav);
      };
      document.querySelectorAll('.dxy-tree').forEach(treeNode => {
        treeNode.onclick = function (e) {
          e.path.forEach(node => {
            Object.keys(events).forEach(event => {
              if (node.className && node.className.indexOf(event) > -1 && node.className.indexOf('active') === -1) {
                events[event](node);
              }
            });
          });
        }
      });

      document.querySelectorAll('.j_preview_code').forEach(node => {
        node.onclick = function (e) {
          let target = e.currentTarget;
          let child = target.querySelector('span');
          child.innerText = child.innerText.replace(/查看|收起/, function (word) {
            return word === '查看' ? '收起' : '查看';
          });
          target.parentNode.classList.toggle('fold');
          let pre = target.parentNode.querySelector('pre');
          pre.style.height = parseFloat(pre.style.height) > 0 ? 0 : pre.querySelector('code').offsetHeight + 'px';
        };
      });
    },

    // 滚动和导航栏显示绑定
    activeNavItem: function (nav, anchor) {
      let self = this;
      if (!anchor) {
        let treeNodes = nav.querySelectorAll('.dxy-tree-content');
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight || documenet.body.scrollHeight;
        if (scrollTop === scrollHeight - clientHeight) {
          let allLink = nav.querySelectorAll('.dxy-tree-content a');
          anchor = allLink[allLink.length - 1].getAttribute('href');
        } else {
          for (let treeNode of treeNodes) {
            let id = treeNode.querySelector('a').getAttribute('href');
            let target = document.querySelector(id);
            if (target.offsetTop - 40 > scrollTop) {
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
      let items = anchor.replace('#', '').split('_');
      let names = [];
      items.forEach(function (item) {
        names.push(item);
        let target = nav.querySelector('a[href="#' + names.join('_') + '"]');
        let treeNode = target.parentNode.parentNode;
        target.parentNode.classList.add('active');
        treeNode.classList.add('dxy-tree-expanded');

        // 清除该树节点的子节点和兄弟节点的样式
        if (treeNode.querySelector('.dxy-tree-children')) {
          treeNode.querySelector('.dxy-tree-children').querySelectorAll('.dxy-tree-content.active').forEach(function (item) {
            item.classList.remove('active');
            item.parentNode.classList.remove('dxy-tree-expanded');
          });
        }
        let siblings = treeNode.parentNode.children;
        for (let node of siblings) {
          if (node !== treeNode && node.querySelector('.dxy-tree-content.active')) {
            node.querySelectorAll('.dxy-tree-content.active').forEach(function (item) {
              item.classList.remove('active');
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