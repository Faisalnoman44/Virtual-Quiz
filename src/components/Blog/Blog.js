import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            <Accordion open={open === 1} className='mb-5'>
                <AccordionHeader onClick={() => handleOpen(1)} className='mb-2 w-7/12 mx-auto'>
                    1.what is the purpose of react router?
                </AccordionHeader>
                <AccordionBody className='text-lg p-3  w-7/12 mx-auto'>
                    React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} className='mb-5'>
                <AccordionHeader onClick={() => handleOpen(2)} className=' w-7/12 mx-auto'>
                    2.What is useRef and why it's use?
                </AccordionHeader>
                <AccordionBody className='text-lg p-3 w-7/12 mx-auto'>
                    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a current: ... object yourself is that useRef will give you the same ref object on every render. Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} className='mb-12 w-7/12 mx-auto'>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    3.How does context API work?
                </AccordionHeader>
                <AccordionBody className='text-lg p-3'>
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </AccordionBody>
            </Accordion>

        </Fragment>
    );
}