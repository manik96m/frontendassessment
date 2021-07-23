import React, { useState } from 'react';

import Tile from '../../landing/components/Tile';
import SectionHeader from '../../landing/components/SectionHeader';
import PaymentPageStatic from '../static/PaymentPageStatic';
import "../styles/PaymentFormStyles.scss";
import Input from '../../../components/Input';
import Radio from '../../../components/Radio';
import Button from '../../landing/components/Button';

const PaymentForm = ({ location }) => {
    const [ selectedPlan, updateSelectedPlan ] = useState(location.state.plan);

    const onPlanChange = (plan) => {
        return () => {
            updateSelectedPlan(plan);
        };        
    };

    const getPlanSelectionView = () => {
        return (
            <div className="payment-form__plan-selection-wrapper">
               <div className="payment-form__title">{PaymentPageStatic.selectPlanHeader}</div>
               {
                   PaymentPageStatic.selectPlanForm.map((form) => {
                       return (
                           <Radio 
                             key={form.id}
                             label={form.label} 
                             color={form.color} 
                             checked={selectedPlan === form.id} 
                             onChange={onPlanChange(form.id)} 
                           />
                       );
                   })
               }
            </div>
        );
    };

    const getForm = () => {
        return (
            <div className="payment-form__form-wrapper">
                {getBillingInfoForm()}
                {getCreditCardForm()}
            </div>
        );
    };

    const getBillingInfoForm = () => {
        return (
            <div>
                <div className="payment-form__title">{PaymentPageStatic.billingFormHeader}</div>
                {PaymentPageStatic.billingForm.map((formField) => {
                    return (
                        <div className="payment-form__field-wrapper" key={formField.id}>
                          <Input label={formField.label}/>
                        </div>
                    );
                })}
            </div>
        );
    };

    const getCreditCardForm = () => {
        return (
            <div>
                <div className="payment-form__title">{PaymentPageStatic.creditCardFormHeader}</div>
                {PaymentPageStatic.creditCardForm.map((formField) => {
                    return (
                        <div className="payment-form__field-wrapper" key={formField.id}>
                          <Input label={formField.label}/>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <Tile containerStyle="payment-form__container">
            <div></div>
            <div>
                <SectionHeader />
                <div className="payment-form__section-heading">{PaymentPageStatic.sectionHeading}</div>
                <div className="payment-form__content-container">
                    {getPlanSelectionView()}
                    {getForm()}
                    <div className="payment-form__disclaimer">{PaymentPageStatic.disclaimer}</div>
                    <Button text={PaymentPageStatic.buttonText} customStyles="pricing__button" type="HOVER_ANIMATE" />
                </div>
            </div>  
        </Tile>
    );
};

export default PaymentForm;
