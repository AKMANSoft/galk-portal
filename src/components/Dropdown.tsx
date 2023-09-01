import Button from "./Button";






export default function Dropwdown() {
    return (
        // content
        <div className="flex gap-3 w-full">
            <div className="p-2 flex items-center justify-between  bg-white w-full" >
                <p className="text-[14px]  font-medium text-silver">
                    Select Projects
                </p>
                <p className="text-xs text-silver trigger ">
                    <img src="public/arrowdown.svg" alt="" />
                </p>


            </div>
            <div>
            <Button />

            </div>
        </div>


    )
}