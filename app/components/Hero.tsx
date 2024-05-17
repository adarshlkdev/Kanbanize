import Link from "next/link"
import Button from "@/components/Button"
import Image from "next/image"
import ProductImage from "./../../public/assets/hero-image.png"

export default function Hero(){
    return(
        <div className=" h-[102vh] relative w-full bg-cover mt-[-70px] overflow-hidden">
            <div className="flex h-full items-center justify-center pt-[82px] gap20 w-[90%] mx-auto max-w-[1450px]">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <Image
            alt="product image"
            className="mx-auto rounded-xl order-last max-md:w-[300px] "
            src={ProductImage}
            >
          </Image>
          <div className="flex flex-col justify-center max-md:items-center space-y-4 max-md:text-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter max-md:text-3xl ">
                Visualize Success Daily
              </h2>
              <p className="max-w-[500px] max-md:max-w-[350px] text-xl max-md:text-lg">
                Take control of your projects with our
                simple yet powerful Kanban board.
              </p>
            </div>
            <Link href={"/sign-up"}>
              <Button normalButton text="Start planning now &#8594;"></Button>
            </Link>
          </div>
        </div>
      </div>
        </div>
    )
}

