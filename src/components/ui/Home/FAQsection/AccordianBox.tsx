import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { GoArrowDownRight } from "react-icons/go";


//  customize accordian with dark and light mode

const AccordionItem = ({ header, ...rest }) => {
  const darkMode = false;

  return <Item   {...rest} header={({ state: { isEnter } }) => (
      <>
      {/* header style  */}
       <h2 className={`text-base md:text-lg lg:text-xl xl:text-[22px] w-[80%] `}> {header}</h2>

       {/* arrow button style  */}
        <div  className={`bg-[#282A36] absolute right-5 md:-bottom-3 lg:-bottom-2 py-1 lg:py-2 xl:py-2 rounded-lg px-4 lg:px-5 xl:px-5 text-2xl md:text-3xl xl:text-4xl ml-auto transition-transform duration-200 ease-out ${ isEnter ? "rotate-180 text-primary-gold" : "text-gray-300" }`}> <GoArrowDownRight /></div>
      </>
    )}

    // accrodian item style 
    className=''  buttonProps={{ className: ({ isEnter }) => `relative flex w-full py-3 md:py-2 lg:py-3 xl:py-5 text-left rounded-lg px-6 lg:px-10 mb-4 xl:mb-6 ${darkMode?'bg-primary-dark-gray  hover:bg-gray-800/50': 'bg-[#171A21]'} ${ isEnter? darkMode?'text-primary-gold': 'text-amber-500' : darkMode? 'text-gray-300' : 'text-gray-400'    }`
    }} 
    
      // inside content style 
    contentProps={{ className: `text-sm lg:text-base xl:text-lg px-6 lg:px-10 ${darkMode? 'text-gray-400': 'text-gray-400'} transition-height duration-200 ease-out` }}  panelProps={{ className: "pb-2 lg:pb-6" }}
  />
};


export default function AccordianBox() {
  return (
    <div className="mx-2 my-4 flex-1">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={200}>
        <AccordionItem header="Do you offer loan services?" >
        Yes, We offer loans with some of the landing banks in the country like Access Bank, GTB Bank, Werma Bank etc.
        </AccordionItem>


        <AccordionItem header="What are capital gains on property purchase?" initialEntered>
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

        

      </Accordion>
    </div>
  );
}
