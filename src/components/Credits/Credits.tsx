import './credits.scss';

const creditsTitle = 'Над проектом работали:';
const authorH2 = 'Автор идеи:';
const programmerH2 = 'Программисты:';
const programmerOne = 'Кристина Хабибулина';
const programmerTwo = 'Виктория Горячкина';
const programmerThree = 'Салов Иван';
const programmerFour = 'Евгений';
const programmerOneLink = 'https://github.com/sinevit';
const programmerTwoLink = 'https://github.com/SosedovaViktoria';
const programmerThreeLink = 'https://github.com/Singlelol';
const programmerFourLink = 'https://github.com/YauhKaz';
const codeLeaderH2 = 'Ведущий программист:';
const chiefDesignerH2 = 'Главный дизайнер:';
const testerH2 = 'Тестировщик:';
const mentorH2 = 'Ментор:';
const buttonText = 'Назад';
const returnBack = '/';

export const Credits = () => {
  return (
    <section className='credits'>
      <h2 className='credits_header'>{creditsTitle}</h2>
      <div className='credits_body'>
        <h3 className='credits_body_title'>{authorH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerThreeLink}>{programmerThree}</a>
        </div>
        <h3 className='credits_body_title'>{programmerH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerOneLink}>{programmerOne}</a>
        </div>
        <div className='credits_body_text'>
          <a href={programmerTwoLink}>{programmerTwo}</a>
        </div>
        <div className='credits_body_text'>
          <a href={programmerThreeLink}>{programmerThree}</a>
        </div>
        <h3 className='credits_body_title'>{codeLeaderH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerOneLink}>{programmerOne}</a>
        </div>
        <h3 className='credits_body_title'>{chiefDesignerH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerTwoLink}>{programmerTwo}</a>
        </div>
        <h3 className='credits_body_title'>{testerH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerThreeLink}>{programmerThree}</a>
        </div>
        <h3 className='credits_body_title'>{mentorH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerFourLink}>{programmerFour}</a>
        </div>
        <button type='button' className='button'>
          <a href={returnBack}>{buttonText}</a>
        </button>
      </div>
    </section>
  );
};
