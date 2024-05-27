
import { Section } from "./Main-section/page";
import { Nav } from "./Nav/page";
import { Header } from "./header/page";
import { Mobile } from "./mobile/page";


export default function Home() {
  return (
   <>
    <Nav />
    <Header />
    <Mobile />
    <Section />
   </>
   
  );
}
