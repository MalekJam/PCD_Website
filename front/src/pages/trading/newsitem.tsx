import { Card} from "flowbite-react";

interface NewsItemProps {
    title: string;
    description: string;
    src: string;
    url: string;
}

const Newsitem: React.FC<NewsItemProps> = ({ title, description, src, url }) => {
    return (
        <Card
            horizontal
            imgSrc={src}
            className="max-w-sm">
            <h2 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">{title}</h2>
            <p className="text-gray-600 dark:text-gray-400 md:text-3xl">{description}</p>
            <a href={url}>Read more</a>
        </Card>
    );
};

export default Newsitem;
