import './credits.scss';

const creditsH1 = 'Над проектом работали:';
const authorH2 = 'Автор идеи:';
const pogrammerH2 = 'Программисты:';
const programmerOne = 'Кристина Хабибулина';
const programmerTwo = 'Виктория Горячкина';
const programmerThree = 'Салов Иван';
const programmerFour = 'Евгений';
const codeLeaderH2 = 'Ведущий программист:';
const chiefDesignerH2 = 'Главный дизайнер:';
const testerH2 = 'Тестировщик:';
const mentorH2 = 'Ментор:';
const buttonText = 'Назад';

export const Credits = () => {
  return (
    <section className='credits'>
      <h2 className='credits_header'>{creditsH1}</h2>
      <div className='credits_body'>
        <h3 className='credits_body_title'>{authorH2}</h3>
        <div className='credits_body_text'>{programmerThree}</div>
        <h3 className='credits_body_title'>{pogrammerH2}</h3>
        <div className='credits_body_text'>{programmerOne}</div>
        <div className='credits_body_text'>{programmerTwo}</div>
        <div className='credits_body_text'>{programmerThree}</div>
        <h3 className='credits_body_title'>{codeLeaderH2}</h3>
        <div className='credits_body_text'>{programmerOne}</div>
        <h3 className='credits_body_title'>{chiefDesignerH2}</h3>
        <div className='credits_body_text'>{programmerTwo}</div>
        <h3 className='credits_body_title'>{testerH2}</h3>
        <div className='credits_body_text'>{programmerThree}</div>
        <h3 className='credits_body_title'>{mentorH2}</h3>
        <div className='credits_body_text'>{programmerFour}</div>
        <button type='button'>{buttonText}</button>
      </div>
    </section>
  );
};
