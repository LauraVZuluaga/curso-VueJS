const app = Vue.createApp({
    data(){
        return{
            titulo: 'Mi banco con VueJs',
            cantidad: 1000, 
            enlace: 'https://youtube.com', 
            estado: false, 
            servicios: ['transferencias', 'pago', 'giros'], 
            desactivar: false
        }
    }, 
    methods: {
        agregarSaldo(){
            this.cantidad = this.cantidad + 100
        }, 
        disminuirSaldo(valor){
            if (this.cantidad === 0){
                alert('Saldo en cero')
                this.desactivar = true
                return
            }
            this.cantidad = this.cantidad - valor
        }
    }, 
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }
    }
})