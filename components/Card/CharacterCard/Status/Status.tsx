import { CharacterStatusType } from "assets/api/rick-and-morty-api"
import { StaticImageData } from "next/image"
import Image from "next/image";

type PropsType = {
    status: CharacterStatusType
    src: StaticImageData
}

export const Status = (props: PropsType) => {
    const { status, src } = props
    return (
        <>
            <Image src={src} alt={' '} />
        </>
    )
}