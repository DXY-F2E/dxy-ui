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
    },

    // 滚动和导航栏显示绑定
    activeNavItem: function (nav, anchor) {
      let self = this;
      if (!anchor) {
        let treeNodes = nav.querySelectorAll('.dxy-tree-content');
        for (let treeNode of treeNodes) {
          let id = treeNode.querySelector('a').getAttribute('href');
          let target = document.querySelector(id);
          if (target.offsetTop - 40 > (document.documentElement.scrollTop || document.body.scrollTop)) {
            // if (nav.querySelector('.dxy-tree-content.active')) {
            //   nav.querySelector('.dxy-tree-content.active').classList.remove('active');
            // }
            // treeNode.classList.add('active');
            break;
          }
          anchor = id;
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