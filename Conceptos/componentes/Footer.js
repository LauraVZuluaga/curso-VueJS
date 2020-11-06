//Los archivos de los componentes se nombran con mayúscula
//Recibe como primer nombre el nombre del componente
app.component('footer-banco', {
    props: ['valor', 'fecha'],
    template: /*html*/`
    <div class="bg-dark py-3 mt-2 text-white">
        <h3>Footer de mi sitio web</h3>
        <h3> {{texto}} - {{valor}} </h3>
        <p> {{fecha}} </p>
    </div>
    `, 
    data(){
        return{
            texto: 'Footer de mi sitio web dinámico', 
        }
    }
})