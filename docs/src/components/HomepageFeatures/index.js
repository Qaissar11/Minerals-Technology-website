import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Official Minerals & Technology Website',
    description: (
      <>
        Here you can find info about Minerals & Technology project.
        Versions, update, documentation, licenses, and more.
      </>
    ),
    link: '/docs/info',
  },
  {
    title: 'Qaissar11`s Portfolio Website',
    description: (
      <>
        Here you can find info about Minerals & Technology's creator, Qaissar11
      </>
    ),
    link: '',
  },
  {
    title: 'Mod Changelog Info',
    description: (
      <>
        Here you can find info about Minerals & Technology project's changelogs
      </>
    ),
    link: 'docs/versions-control/versions',
  }
];

function Feature({ title, description, link }) {
  return (
    <a href={link} className={clsx('col col--4', styles.cardLink)}>
      <div className={clsx(styles.card, 'text--center', 'padding-horiz--md')}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
