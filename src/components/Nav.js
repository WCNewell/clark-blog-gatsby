import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './navigation/hooks';
import { Burger, Menu } from './navigation'


const Nav = () => {
    const [open, setOpen] = useState(false)
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false))

    return (
        <>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
            </div>
                   
        </>
    )
}

export default Nav

