import"./assets/styles-5640d221.js";import{S as p}from"./assets/vendor-870f0eb5.js";const a=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],n=document.querySelector(".gallery"),c=o=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${o.original}">
                <img 
                    class="gallery-image" 
                    src="${o.preview}" 
                    alt="${o.description}" 
                    />
            </a>
        </li>
    `,l=a.map(o=>c(o)).join("");n.insertAdjacentHTML("afterbegin",l);const r=document.querySelectorAll(".gallery-link");r.forEach(o=>o.addEventListener("click",t=>t.preventDefault()));const s=new p(".gallery a",{captionsData:"alt",captionDelay:250});s.on("shown.simplelightbox",()=>{const o=document.querySelector(".sl-overlay"),t=document.querySelector(".sl-next"),e=document.querySelector(".sl-prev"),i=document.querySelector(".sl-close");o.style.backgroundColor="#2e2f42",t.style.color="white",e.style.color="white",i.style.color="white"});
//# sourceMappingURL=commonHelpers.js.map
