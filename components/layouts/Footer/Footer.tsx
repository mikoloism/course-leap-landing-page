import { Group } from '@/atoms';
import { Copyright } from '@/molecules/Copyright';
import { Features, Information, Resources, Socials } from '@/organisms/Footer';

function FooterContainer({ children }: any) {
    return (
        <footer className="flex flex-wrap flex-col place-content-center place-items-center w-screen bg-white">
            <Group
                gapx="6"
                dir="reverse-row"
                className="w-8/12">
                {children}
            </Group>
        </footer>
    );
}

function FooterBlocks() {
    return (
        <FooterContainer>
            <Resources />
            <Features />
            <Information />
            <Socials />
        </FooterContainer>
    );
}

export default function Footer() {
    return (
        <>
            <FooterBlocks />
            <Copyright />
        </>
    );
}
