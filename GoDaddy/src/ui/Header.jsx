import React from 'react';

function Header() {
    return (
        <header className="flex bg-neutral-800 justify-between md:px-10 p-2">
            <div className="flex text-xl font-bold text-white items-center space-x-2">
                <box-icon className="2xl:hidden" color="white" size="md" name='menu' ></box-icon>
                <box-icon color="white"  size="lg" type='logo' name='docker'></box-icon>
                <span className="hidden md:inline-block">Go Daddy</span>
                <div className="hidden pl-4 space-x-5 text-sm 2xl:flex items-center">
                    <div className="flex items-center space-x-1">
                        <span>Domains</span>
                        <box-icon color="white" name='chevron-down'></box-icon>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span>Websites and Hosting</span>
                        <box-icon color="white" name='chevron-down'></box-icon>
                    </div>
                    <span>Email</span>
                    <div className="flex items-center space-x-1">
                        <span>Security</span>
                        <box-icon color="white" name='chevron-down'></box-icon>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span>Marketing</span>
                        <box-icon color="white" name='chevron-down'></box-icon>
                    </div>
                    <span>Pricing</span>
                </div>
            </div>
            <div className="flex text-white space-x-4">
                <box-icon className="xl:hidden" color="white"  size="md" name='question-mark' ></box-icon>
                <box-icon className="xl:hidden" color="white"  size="md" name='user'></box-icon>
                <div className="hidden xl:flex items-center space-x-3">
                    <span>Contact us</span>
                    <span>Help</span>
                    <div className="flex items-center space-x-1">
                        <span>Sign in</span>
                        <box-icon color="white" name='chevron-down'></box-icon>
                    </div>
                </div>
                <box-icon color="white"  size="md" name='cart' ></box-icon>
            </div>
        </header>
    );
}

export default Header;