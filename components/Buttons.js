export const SliderLeftBtn = ({title = 'LEARN MORE', href}) =>
    <a
        className="group relative inline-block overflow-hidden border border-secondary px-8 py-3 focus:outline-none focus:ring rounded"
        href={href}
    >
        <span
            className="absolute inset-y-0 left-0 w-[2px] bg-secondary transition-all group-hover:w-full group-active:bg-secondary"
        />

        <span className={"relative text-sm font-medium transition-colors group-hover:text-white" }>
           {title}
        </span>
    </a>