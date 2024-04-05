import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function EditProductPage(){
    const router=useRouter();
    const {id}=router.query;
    console.log({router})
    return(
        <Layout>
            Edit product here
        </Layout>
    )
}