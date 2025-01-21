import {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import {ICart} from "../../models/ICart.ts";
import {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {cartService} from "../../services/api.service.ts";
interface Props {

}
export const CartsComponent: FC<Props> = () => {

  const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts)
                });
        }
    }, [id]);
console.log(carts)
    return (
        <div>
            {
                carts.map((cart: ICart) => (<div key={cart.id}>
                        {cart.total}
                        </div>))
            }
        </div>
    );
};