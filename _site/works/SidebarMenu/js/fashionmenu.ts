/**
 * Created by tcstory on 9/15/15.
 */

module FashionMenu {

    export class SidebarMenu {
        private sidebarMenu:HTMLElement;
        private toggleMenu:HTMLElement;
        private toggleMenuIcon:HTMLImageElement;
        private menuItems:HTMLUListElement;
        constructor() {
            this.toggleMenu = <HTMLElement>document.querySelector('#toggle-menu');
            this.sidebarMenu = <HTMLElement>document.querySelector('#sidebar-menu');
            this.toggleMenuIcon = <HTMLImageElement>document.querySelector('#toggle-menu-icon > img');
            this.menuItems = <HTMLUListElement>document.querySelector('#menu-items');
            this.init();
        }
        init() {
            this.toggleMenu.addEventListener('click',e => {
                this.sidebarMenu.classList.toggle('open');
                if (this.sidebarMenu.classList.contains('open')) {
                    this.toggleMenuIcon.src = 'images/toggle-thumbs.png';
                } else {
                    this.toggleMenuIcon.src = 'images/toggle-list.png';
                }
            });
            this.menuItems.addEventListener('click', (e:MouseEvent)=>{
                var prevClick = <HTMLLIElement>document.querySelector('li.clicked');
                if (prevClick != null) {
                    prevClick.classList.remove('clicked');
                }
                if (e.target['tagName'].toLowerCase() === 'li') {
                    e.target['classList'].add('clicked');
                } else if (e.target['tagName'].toLowerCase() === 'span') {
                    e.target['parentNode']['classList'].add('clicked');
                }
            })
        }
    }
}