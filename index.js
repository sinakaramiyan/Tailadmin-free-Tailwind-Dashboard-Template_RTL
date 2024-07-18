class app{
    constructor(){
      this.admin();
    }
    admin(){
      //preloader
      const preloader = document.querySelector('#preloader');
      window.addEventListener('DOMContentLoaded', () => {
        preloader.classList.add('hidden');
        setTimeout(() => {
        }, 5000);
      })
      //another method for implement preloader
      // if (document.readyState === "loading") {
      //   // Loading hasn't finished yet
        
      // } else {
      //   // `DOMContentLoaded` has already fired
      //   preloader.remove();
      // }
  
      const button = document.querySelectorAll('#button');
      const main = document.querySelector('#main');
      button.forEach( element => {
        element.addEventListener('click', function(e){
          e.preventDefault();
  
          //for go to top should set overflow-y-scroll for element
          main.parentElement.scrollTo({
            top: 0,
            behavior: "smooth"
          });
  
          //preloader mechanism
          preloader.classList.remove('hidden');
          if (document.readyState === "loading") {
            // Loading hasn't finished yet         
          } else {
            // `DOMContentLoaded` has already fired
            setTimeout(() => {
              // window.location.reload();
              preloader.classList.add('hidden');
            }, 500);
          }
          
          main.replaceChildren();
          const profile = this.nextElementSibling;
          main.innerHTML = profile.innerHTML;
  
          if(main.firstElementChild.id === 'noscroll'){
            main.parentElement.classList.add('no-scrollbar');
            main.parentElement.classList.remove('overflow-y-scroll');
          }else{
            main.parentElement.classList.remove('no-scrollbar');
            main.parentElement.classList.add('overflow-y-scroll');
          }
          })
        })
  
      // for templating use this code
      // const template = document.querySelector('#template');
      // template.remove();
      // const tem = document.getElementById('button');
      // tem.addEventListener('click', function(e){
      //   e.preventDefault();
      //   main.replaceChildren();
      //   main.append(template.content);
      // })
  
      var details = [...document.querySelectorAll('details')];
      document.addEventListener('click', function(e) {
        if (!details.some(f => f.contains(e.target))) {
          details.forEach(f => f.removeAttribute('open'));
        } else {
          details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
        }
      })
  
      //dark mode toggle
  
      var themeToggleBtn = document.getElementById('theme-toggle');
  
      themeToggleBtn.addEventListener('click', function() {
        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
        } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
        }
      });
    }
  }
  new app();
  