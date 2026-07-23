import { Button } from "../base/Button"

export const Header: React.FC = ()=>{
    return (
        <header>
            <Button >
                کلیک کن

            </Button>
            <Button variant="text"  onClick={()=>{}}>کلیک کنید</Button>
            <Button variant="outlined">کلیک کنید</Button>
        </header>
    )
}