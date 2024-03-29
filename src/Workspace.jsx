import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
export default function Workspace (){
    return(
        <TransformWrapper>
            <TransformComponent>
                <div className="h-lvh w-screen bg-slate-200">
                    <p className="text-2xl">HELLO</p>
                </div>
            </TransformComponent>
        </TransformWrapper>
    )
}
