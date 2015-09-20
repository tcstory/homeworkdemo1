/**
 * Created by tcstory on 9/15/15.
 */
var FashionMenu;
(function (FashionMenu) {
    var SidebarMenu = (function () {
        function SidebarMenu() {
            this.toggleMenu = document.querySelector('#toggle-menu');
            this.sidebarMenu = document.querySelector('#sidebar-menu');
            this.toggleMenuIcon = document.querySelector('#toggle-menu-icon > img');
            this.menuItems = document.querySelector('#menu-items');
            this.init();
        }
        SidebarMenu.prototype.init = function () {
            var _this = this;
            this.toggleMenu.addEventListener('click', function (e) {
                _this.sidebarMenu.classList.toggle('open');
                if (_this.sidebarMenu.classList.contains('open')) {
                    _this.toggleMenuIcon.src = 'images/toggle-thumbs.png';
                }
                else {
                    _this.toggleMenuIcon.src = 'images/toggle-list.png';
                }
            });
            this.menuItems.addEventListener('click', function (e) {
                var prevClick = document.querySelector('li.clicked');
                if (prevClick != null) {
                    prevClick.classList.remove('clicked');
                }
                if (e.target['tagName'].toLowerCase() === 'li') {
                    e.target['classList'].add('clicked');
                }
                else if (e.target['tagName'].toLowerCase() === 'span') {
                    e.target['parentNode']['classList'].add('clicked');
                }
            });
        };
        return SidebarMenu;
    })();
    FashionMenu.SidebarMenu = SidebarMenu;
})(FashionMenu || (FashionMenu = {}));
//# sourceMappingURL=fashionmenu.js.map