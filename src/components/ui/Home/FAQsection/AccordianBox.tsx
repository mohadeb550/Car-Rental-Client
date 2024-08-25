import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

//  customize accordian :

const AccordionItem = ({ header, ...rest } : { header : string, initialEntered? : boolean, children : string}) => {

  return <Item   {...rest} header={({ state: { isEnter } }) => (
      <>
      {/* header style  */}
       <h2 className={`text-base md:text-lg lg:text-xl xl:text-2xl`}> {header}</h2>

       {/* arrow button style  */}
        <div  className={`text-2xl md:text-3xl xl:text-4xl ml-auto transition-transform duration-200 ease-out ${ isEnter && "rotate-180" }`}> <MdOutlineKeyboardArrowDown /></div>
      </>
    )}
    // accrodian item style 
    className="border-b border-gray-400"  buttonProps={{ className: ({ isEnter }) =>  `flex w-full py-3 md:py-2 lg:py-3 xl:py-6 text-left hover:bg-gray-50/60 ${ isEnter? "text-red-400" : 'text-black/80'    }`
    }} 
      // inside content style 
    contentProps={{ className: `text-sm lg:text-base xl:text-lg text-primary-gray transition-height duration-200 ease-out` }}  panelProps={{ className: "pb-2 lg:pb-3" }}
  />
};


export default function AccordianBox() {
  return (
    <div className="mx-2 my-4 w-full">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={200}>
        <AccordionItem header="Do you offer loan services?" initialEntered>
        Yes, We offer loans with some of the landing banks in the country like Access Bank, GTB Bank, Werma Bank etc.
        </AccordionItem>


        <AccordionItem header="What are capital gains on property purchase?">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>

        <AccordionItem header="What kind of properties are listed on your website?">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>


        <AccordionItem header="How can I negotiate the price of a property?">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>

        
        <AccordionItem header="What kind of properties are listed on your website?">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
