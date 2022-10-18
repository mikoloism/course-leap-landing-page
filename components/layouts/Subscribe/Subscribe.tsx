import { Group } from '@/components/atoms';
import { Header } from '@/molecules/Header';

const $content = {
    title: 'JOIN US',
    description: `Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics`,
    mailbox: 'Your Email',
    submit: 'Subscribe',
};

export default function Subscribe() {
    return (
        <Group
            color="white"
            className="h-[75vh] w-screen">
            <Header
                level="h2"
                title={$content.title}
                description={$content.description}
                width="12"
                className="w-4/12 h-64 place-content-center place-items-start gap-y-2 text-left"
            />

            <SubscriptionForm />
        </Group>
    );
}

function SubscriptionForm() {
    return (
        <form className="flex flex-wrap w-4/12 h-20 flex-row place-content-center place-items-center border-gray-300 border-solid border-4 rounded-lg p-0">
            <input
                className="inline-flex flex-wrap flex-col place-content-center place-items-center h-full w-9/12 bg-gray-200 text-black font-semibold placeholder:text-gray placeholder:font-montserrat placeholder:text-input text-2xl focus:border-none focus:outline-0 focus:stroke-0 group-focus:bg-primary font-montserrat rounded-l-md px-8 py-4 space-x-0 space-y-0"
                type="mail"
                placeholder={$content.mailbox}
            />
            <button
                className="h-full w-3/12 inline-flex flex-wrap flex-col place-content-center place-items-center rounded-r-md bg-primary text-white px-8 py-4 border-solid border-4 border-primary text-btn hover:bg-secondary hover:scale-95 hover:border-secondary transition"
                type="button">
                {$content.submit}
            </button>
        </form>
    );
}
