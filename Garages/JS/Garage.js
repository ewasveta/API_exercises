class Garage
{
    constructor(id, mispar_mosah=0, shem_mosah=0, cod_sug_mosah=0, 
        sug_mosah=0, ktovet=0, yishuv=0, telephone=0, mikud=0,
        cod_miktzoa=0, miktzoa=0, menahel_miktzoa=0, rasham_havarot=0)
    {
        this.id = id
        this.mispar_mosah = mispar_mosah
        this.shem_mosah = shem_mosah
        this.cod_sug_mosah = cod_sug_mosah
        this.sug_mosah = sug_mosah
        this.ktovet = ktovet
        this.yishuv = yishuv
        this.telephone = telephone
        this.mikud = mikud
        this.cod_miktzoa = cod_miktzoa
        this.miktzoa = miktzoa
        this.menahel_miktzoa = menahel_miktzoa
        this.rasham_havarot = rasham_havarot
    }
    createRow()
    {
        return `<li class="list-group-item p-2">
                    <button onclick="details(${this.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">  
                        <i class="fa-solid fa-eye" style="color:carob;"></i>
                    </button>    
                    ${this.shem_mosah}:  ${this.miktzoa}
                </li>`
    }
}