import Link from "next/link";

const SignUp = () => {
    return <section
        className='flex justify-center items-center flex-col w-full h-[400px] bg-cover bg-center bg-[url(/img/membership.png)]'>
        <h1 className='text-4xl'>SIGN UP TODAY AND GET</h1>
        <h2 className='text-6xl text-bold'>21 DAY FREE TRIAL</h2>
        <div className='p-10'>
            <span className='glow-btn'>
                <Link href="/join">START FREE TRIAL</Link>
            </span>
        </div>
    </section>
}


export default SignUp;