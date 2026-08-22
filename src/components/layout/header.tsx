import { Button } from "../base/Button";
import Container from "../base/container";
import Logo from "../base/logo";

export const Header: React.FC = ()=>{
    return (
        <header>
            <Container>
                <div className="flex justify-between items-center">
                <div>
                    <Logo/>

                </div>
                <div>
                      <Button >
                کلیک کن

            </Button>
            <Button variant="text"  onClick={()=>{}}>کلیک کنید</Button>
            <Button variant="outlined">کلیک کنید</Button>


                </div>
            
          


            </div>

            </Container>
            
      
        </header>
    )
}