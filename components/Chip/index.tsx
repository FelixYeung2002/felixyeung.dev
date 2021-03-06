interface ChipProps {
    label: string;
}

const Chip = ({ label }: ChipProps) => {
    return (
        <div className="m-2 py-2 px-4 flex flex-grow lg:flex-grow-0 items-center justify-center bg-white dark:bg-black rounded-full">
            {label}
        </div>
    );
};

export default Chip;
