export default function getRefs() {
    return {
        txtEmail: document.querySelector('#txtEmail'),
        txtPassword: document.querySelector('#txtPassword'),
        btnLogin: document.querySelector('#btnLogin'),
        btnSignup: document.querySelector('#btnSignup'),
        btnLogout: document.querySelector('#btnLogout'),
        divAuthState: document.querySelector('#divAuthState'),
        lblAuthState: document.querySelector('#lblAuthState'),
        divLoginError: document.querySelector('#divLoginError'),
        lblLoginErrorMessage: document.querySelector('#lblLoginErrorMessage'),
        successEnter: document.querySelector('#success-enter'),
        successExit: document.querySelector('#success-exit'),
        userForm: document.querySelector('[data-user]'),
        backdropNotification: document.querySelector('#backdrop-notification'),

        registIcon: document.querySelector('.regist'),
        enterIcon: document.querySelector('.enter'),
// 
        openModalUserBtn: document.querySelector('[data-modal-user-open]'),
        closeModalUserBtn: document.querySelector('[data-modal-user-close]'),
        registModalUserBtn: document.querySelector('button.regist'),
        enterModalUserBtn: document.querySelector('button.enter'),
        modalUser: document.querySelector('[data-modal-user]'),
    };
}