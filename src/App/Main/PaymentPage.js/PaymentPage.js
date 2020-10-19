import React from 'react'
import './payment.css'

const Payment = () => {
    return (
        <>
            <div className="product-list">
                <h1 className="page-title">Payment</h1>
            </div>
            <div className="central-wrapper">
                <div className="col-lg-6">
                    <h1 className="chekout-heading">Оформлення замовлення</h1>
                    <div className="chekout-from__content">
                        <div className="checkout-block">
                            <div className="checkout-block__title">
                                <span aria-hidden="true" class="checkout-block__title-informer"> ! </span>
                                Ваші контактні дані
                            </div>
                            <div>
                                <div className="chips">
                                    <ul className="chips__list">
                                        <li className="chips__item">
                                            <button class="chips__button chips__button_state_active" type="button"> Я новий покупець </button>
                                        </li>
                                        <li className="chips__item">
                                            <button class="chips__button" type="button"> Я постійний клієнт</button>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Payment