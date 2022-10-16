import { AchieveFloat } from '@/molecules/AchieveFloat';
import style from '@/styles/achievements.module.css';

function useFakeFetch() {
    const SINGLE_FEATURES_ITEM = {
        description: 'The gradual accumulation of information about',
    };

    return {
        data: [
            { title: 'Certified Teacher', ...SINGLE_FEATURES_ITEM },
            { title: 'Market Analysis', ...SINGLE_FEATURES_ITEM },
            { title: 'Sales Planning', ...SINGLE_FEATURES_ITEM },
        ],
        error: undefined,
    };
}

export function AchievementFloats() {
    const [teachers, analytic, planning] = useFakeFetch().data;

    return (
        <section
            className={`w-1/2 h-full place-items-center justify-around ${style.achievementFloats}`}>
            <AchieveFloat
                title={teachers.title}
                description={teachers.description}
                icon="check-underline"
                color="bg-box-bg-blue fill-primary"
                grid={style.achievementItemTop}
            />
            <AchieveFloat
                title={analytic.title}
                description={analytic.description}
                icon="credit-card"
                color="bg-box-bg-red fill-accent"
                grid={style.achievementItemMiddle}
            />
            <AchieveFloat
                title={planning.title}
                description={planning.description}
                icon="tag"
                color="bg-box-bg-green fill-accent-green"
                grid={style.achievementItemBottom}
            />
        </section>
    );
}
