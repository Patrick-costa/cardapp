import { Observable } from "rxjs";
import { Loja } from "./loja";

export interface Cardapio {
    id?: string;
    categoria?: string;
    sabor?: string;
    ingredientes?: string;
    tamanho1?: string;
    preco1?: string;
    tamanho2?: string;
    preco2?: string;
    tamanho3?: string;
    preco3?: string;
    userId?: string;
    loja?: string;
}
