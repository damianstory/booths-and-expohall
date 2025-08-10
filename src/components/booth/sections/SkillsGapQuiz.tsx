'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'

type SoWhat = {
  importance: string
  action: string
}

type QuizQuestion = {
  question: string
  options: string[]
  correctAnswer: string
  proTip: string
  soWhat: SoWhat
}

const questions: QuizQuestion[] = [
  {
    question: '1. Which sector in Canada faced the largest labour shortages in 2024?',
    options: ['Engineering', 'Education and Social Services', 'Skilled Trades', 'Healthcare'],
    correctAnswer: 'Healthcare',
    proTip:
      'The report highlights that healthcare had some of the most significant labour shortages. For example, there were over 16,170 unfilled positions ("excess vacancies") just for nursing and therapy professionals, plus another 12,460 for technical specialists in healthcare. These large gaps directly impact the delivery of healthcare services across Canada.',
    soWhat: {
      importance:
        "High demand in healthcare means strong job security and many opportunities to make a real difference in people's lives. These shortages affect everyone's ability to get timely medical care.",
      action:
        'Explore various healthcare careers (nursing, technologist, therapist, support staff). Take science courses like biology and chemistry in high school. Consider volunteering at a local clinic, hospital, or long-term care home to gain experience.'
    }
  },
  {
    question: '2. What percentage of vacant positions in Canada require formal post-secondary training?',
    options: ['50%', '66%', '80%', '100%'],
    correctAnswer: '80%',
    proTip:
      'A very large majority – 80% – of the job openings Canada needs to fill require some form of formal education or training after high school. This is much higher than the 57% of the current working-age population (ages 25-64) who reported having such qualifications in the census. This tells us that further education or training is crucial for accessing many of the jobs currently in demand.',
    soWhat: {
      importance:
        "This shows that simply finishing high school isn't enough for most available jobs. Planning for some kind of further education or training is essential for future career options.",
      action:
        'Focus on graduating high school with the best grades you can. Start researching different post-secondary options early – college, university, apprenticeships. Talk to your guidance counsellor about paths that match your interests and skills.'
    }
  },
  {
    question:
      '3. Besides university degrees, what types of post-secondary credentials are most in demand for Canadian jobs?',
    options: [
      'High school diplomas only',
      'College and trade certifications',
      'Workplace-specific training certificates',
      'Short-term skills bootcamps'
    ],
    correctAnswer: 'College and trade certifications',
    proTip:
      'While university degrees are necessary for some roles, the report points out that two-thirds (about 67%) of the vacant jobs needing post-secondary training specifically require non-university credentials. These are qualifications you typically get from completing programs at a college or through apprenticeship training for skilled trades, like becoming a plumber or an automotive service technician.',
    soWhat: {
      importance:
        "University isn't the only path to a good career! Many well-paying, in-demand jobs require skills learned through college programs or skilled trades apprenticeships. These options shouldn't be overlooked.",
      action:
        'Explore college programs and skilled trades that interest you. Take relevant high school courses like technology, shop, or family studies. Look for co-op or pre-apprenticeship opportunities if available.'
    }
  },
  {
    question:
      '4. Which of these skilled trades typically requires roughly four years of combined on-the-job and in-school training for a Red Seal certification?',
    options: ['Chef', 'Electrician', 'Hairstylist', 'Graphic Designer'],
    correctAnswer: 'Electrician',
    proTip:
      'Becoming a certified professional in many skilled trades takes considerable time and effort. The report uses the example of "Red Seal" tradespeople like electricians, plumbers, and mechanics. Achieving this high level of certification, which allows work across Canada, often involves about 7,200 hours of training – roughly four years if done full-time – combining in-school technical learning with supervised on-the-job experience.',
    soWhat: {
      importance:
        'Becoming highly skilled in a trade takes serious commitment and time, similar to a university degree. This dedication leads to valuable expertise recognized across the country.',
      action:
        'If a trade like electrician interests you, research the specific apprenticeship pathway. Understand the time commitment involved. Develop good work habits, math skills, and hands-on abilities.'
    }
  },
  {
    question:
      '5. To meet labour market needs, expansion of university programs is suggested. Which field is specifically mentioned for expansion at the university level?',
    options: ['Business Administration', 'Computer Science', 'Registered Nursing', 'Fine Arts'],
    correctAnswer: 'Registered Nursing',
    proTip:
      "To tackle the shortages, the report advises universities to increase enrollment in specific high-demand programs. Key areas mentioned for university-level expansion include registered nursing (requiring a bachelor's degree), allied health diagnostics (like medical imaging technologists), and human development/family studies. The need for registered nurses is particularly large, with vacancies equivalent to over half the number of recent graduates.",
    soWhat: {
      importance:
        "There's a huge, specific need for more Registered Nurses, which requires a university degree. This means excellent job prospects for those who pursue this demanding but rewarding field.",
      action:
        'If nursing interests you, focus on achieving the high school grades (especially in sciences) needed for university nursing programs. Gain relevant volunteer experience in healthcare settings.'
    }
  },
  {
    question:
      '6. Which area is highlighted for expansion in college and apprenticeship programs to meet labour needs?',
    options: [
      'Hospitality Management',
      'Electrical and power transmission installation',
      'Digital Marketing',
      'Early Childhood Education (University level also mentioned)'
    ],
    correctAnswer: 'Electrical and power transmission installation',
    proTip:
      'Colleges and apprenticeship programs are also urged to grow specific offerings. The report highlights fields like practical nursing (a college certificate program), electrical and power transmission installers (often an apprenticeship), and vehicle maintenance and repair technologies as needing significantly more graduates to meet employer demand. For instance, the shortage of plumbers is equivalent to 103% of the annual number of graduates, indicating a huge gap.',
    soWhat: {
      importance:
        'Specific college and trade fields, like electrical work, practical nursing, and mechanics, are facing major shortages. This translates directly into high demand for graduates.',
      action:
        'Research specific college programs or trades that are known to be in demand. Align your high school courses if possible. Explore related hobbies or clubs (e.g., working on cars, electronics projects).'
    }
  },
  {
    question:
      '7. Shortages in higher-skilled technical roles are holding back Canadian productivity. Which of the following is an example of such a role?',
    options: ['Retail Salesperson', 'Food Service Worker', 'Engineer', 'Customer Support Staff'],
    correctAnswer: 'Engineer',
    proTip:
      'The report finds that the lack of workers isn\'t just in any job, but particularly in higher-skilled roles needing technical abilities, like engineers, technicians, and skilled tradespeople (electricians, mechanics, etc.). These shortages reduce Canada\'s overall economic productivity by an estimated 0.1 percentage points, costing billions. These jobs often require specialized training and play key roles in industries like construction, manufacturing, and technology.',
    soWhat: {
      importance:
        "People with strong technical and problem-solving skills (like engineers and technicians) are crucial for Canada's economy to grow. These skills are highly valued by employers.",
      action:
        'Develop your problem-solving abilities. Consider courses and careers in STEM (Science, Technology, Engineering, Math). Participate in activities like science fairs, coding clubs, or robotics competitions.'
    }
  },
  {
    question:
      '8. Regarding immigration policy, what is one suggested action the federal government could take to address labour shortages?',
    options: [
      'Decrease overall immigration numbers.',
      'Focus immigration points only on university degrees.',
      'Rebalance the points system to give more weight to skilled trades experience.',
      'Stop accepting international students.'
    ],
    correctAnswer:
      'Rebalance the points system to give more weight to skilled trades experience.',
    proTip:
      'The report suggests ways immigration policy could better help fill job shortages. One key recommendation is to adjust the points system Canada uses to select economic immigrants. It suggests giving more points for work experience in skilled trades (like construction or mechanics) and other technical jobs, and perhaps slightly less weight just for having a university degree, to better match the skills Canada currently needs most.',
    soWhat: {
      importance:
        'Government policies adapt to economic needs. This suggestion shows that practical skills learned in trades are becoming increasingly recognized as vital to Canada\'s workforce.',
      action:
        'Understand that the value of different skills can change over time. Don\'t discount trades – they are essential and may offer strong immigration pathways for future newcomers, reflecting their importance.'
    }
  },
  {
    question:
      '9. The shortage of registered nurses in 2022 was equivalent to what percentage of that year\'s graduates in the field?',
    options: ['25%', '54% (Meaning the shortage is equivalent to 54% of the graduate number, indicating a large gap)', '75%', '100%'],
    correctAnswer:
      '54% (Meaning the shortage is equivalent to 54% of the graduate number, indicating a large gap)',
    proTip:
      'The shortage of registered nurses is described as severe. The report calculated that Canada needed about 11,142 more registered nurses than were available. This number is equal to 54% of the entire group of students who graduated from registered nursing university programs in 2022. This stark statistic shows that simply graduating the current number isn\'t nearly enough; Canada needs a major increase in nursing education capacity, including more faculty and training placements.',
    soWhat: {
      importance:
        'This highlights the massive scale of the nursing shortage. Even with current graduates, the gap remains huge, emphasizing the critical need and opportunity in this field.',
      action:
        'This reinforces the strong job prospects in nursing. If interested, research the profession thoroughly. Also, consider related healthcare support roles that are also in demand.'
    }
  },
  {
    question:
      "10. Canada's immigration system appears to prioritize one type of credential over others. Which type is generally prioritized?",
    options: ['Trade certifications', 'College diplomas', 'University degrees', 'High school diplomas'],
    correctAnswer: 'University degrees',
    proTip:
      'The analysis in the report suggests that Canada\'s economic immigration system currently tends to favour applicants holding university degrees. While university-educated immigrants are valuable, the system results in relatively fewer immigrants arriving with college diplomas or trade certifications. This is a mismatch, as only 12% of economic immigrants held college certificates and 4% had trade certifications, despite 37% of vacancies needing college degrees and 16% needing trade certifications.',
    soWhat: {
      importance:
        "There's a potential disconnect between the skills Canada needs most (including many college/trade skills) and the credentials prioritized in immigration. This highlights the ongoing demand for practical, non-university skills.",
      action:
        "Don't assume university is automatically the 'best' path. Research the actual job demand and earning potential for various college programs and trades alongside university options."
    }
  },
  {
    question:
      '11. What is the estimated cost to the Canadian economy in 2024 due to the mismatch between skilled worker supply and demand?',
    options: ['$1 million', '$500 million', '$1 billion', '$2.6 billion'],
    correctAnswer: '$2.6 billion',
    proTip:
      'When employers can\'t find the workers they need with the right skills, it slows down business and impacts the whole economy. The report estimates that this "skills gap" – the mismatch between job openings and available skilled workers – cost the Canadian economy about $2.6 billion in lost potential growth (GDP) in the year 2024. Each unfilled high-skill job ("excess vacancy") was estimated to represent an economic loss of about $40,400.',
    soWhat: {
      importance:
        "Not having enough workers with the right skills isn't just an employer problem; it costs the entire country billions in lost economic activity, affecting everyone's prosperity.",
      action:
        'Take your education and skill development seriously – the skills you gain contribute to the bigger picture. Aim to develop skills that are actually needed in the workforce.'
    }
  },
  {
    question:
      '12. Besides technical skills, what other skill category do occupations with the highest excess vacancies require higher proficiency in compared to the average Canadian worker?',
    options: [
      'Foundational, Analytical, Resource Management, and Interpersonal skills',
      'Artistic skills only',
      'Athletic skills only',
      'Language skills only'
    ],
    correctAnswer:
      'Foundational, Analytical, Resource Management, and Interpersonal skills',
    proTip:
      'Jobs experiencing the biggest shortages generally require higher skill levels across many categories, not just technical ones. Compared to the average Canadian job, these in-demand roles need workers with stronger foundational skills (like reading and math), analytical skills (thinking critically, solving problems), resource management skills (managing time or budgets), and interpersonal skills (communication, teamwork). The gap was most pronounced for technical skills, but present across all categories.',
    soWhat: {
      importance:
        "Being good at just one thing isn't enough for many top jobs. Employers need people who can also communicate, think critically, manage their time, and work well with others ('soft skills').",
      action:
        'Actively work on developing these broader skills. Participate in group projects, practice public speaking, take on responsibilities in clubs or part-time jobs, and focus on clear communication.'
    }
  },
  {
    question:
      '13. Which type of engineering role accounts for the majority of shortages within the engineering cluster?',
    options: ['Electrical Engineers', 'Computer Engineers', 'Civil and Mechanical Engineers', 'Chemical Engineers'],
    correctAnswer: 'Civil and Mechanical Engineers',
    proTip:
      'While there are shortages across different types of engineering, they are particularly concentrated in certain specializations. The report found that nearly 1,650 excess vacancies were specifically for Civil and Mechanical Engineers, making up the largest part of the shortage within the broader engineering field. These engineers are essential for projects like building bridges, roads, and developing machinery.',
    soWhat: {
      importance:
        'Even within a broad field like engineering, specific specializations (like Civil and Mechanical) can have particularly high demand due to their role in building infrastructure and industry.',
      action:
        'If you\'re interested in engineering, research the different specializations. Focus on strong math and physics skills. Consider joining clubs related to design, building, or robotics.'
    }
  },
  {
    question:
      '14. What is the main purpose of the Foreign Credential Recognition Program (FCRP) in Canada?',
    options: [
      'To provide loans for Canadian students studying abroad.',
      'To fund research into new skill development.',
      'To help newcomers get their foreign credentials recognized to work in Canada.',
      'To set the curriculum for trade schools.'
    ],
    correctAnswer:
      'To help newcomers get their foreign credentials recognized to work in Canada.',
    proTip:
      'Immigrants often arrive in Canada with valuable education and work experience from their home countries. However, getting these qualifications officially accepted here can be a challenge, preventing them from working in their fields. The Foreign Credential Recognition Program (FCRP) is designed to help newcomers navigate this process, particularly in high-demand areas like healthcare and skilled trades, making it easier and faster for them to get the licenses or certifications needed to work in Canada.',
    soWhat: {
      importance:
        'This program helps Canada benefit from the skills immigrants bring, addressing shortages faster. It acknowledges that talent exists globally but needs pathways to be recognized here.',
      action:
        'Be welcoming and supportive to newcomer classmates or community members. Understand that they may have valuable skills and experience, even if they face challenges getting them recognized in Canada.'
    }
  },
  {
    question:
      '15. Which region in Canada faces acute shortages in higher-skill goods occupations, particularly affecting resource-based industries?',
    options: ['Atlantic Canada', 'Quebec', 'Ontario', 'The Prairies'],
    correctAnswer: 'The Prairies',
    proTip:
      'Skills shortages vary somewhat across Canada\'s different regions. The report specifically points out that the Prairie provinces (Alberta, Saskatchewan, and Manitoba) face particularly sharp shortages in "higher-skill goods occupations". This category includes many tradespeople crucial for the resource-based industries (like oil and gas, mining, agriculture) that are important in that region. The Prairies also had notable shortages of labourers and truck drivers, unlike most other provinces.',
    soWhat: {
      importance:
        "Job opportunities aren't the same everywhere in Canada. Certain regions have specific needs based on their main industries (like resources and trades in the Prairies).",
      action:
        'Be aware that where you live can influence job availability in certain fields. When planning your future, consider researching job markets in different regions, especially if interested in industries like resources or specific trades.'
    }
  }
]

const buttonBaseClasses =
  'w-full bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-lg border border-gray-300 transition duration-200 ease-in-out text-left shadow-sm'

export default function SkillsGapQuiz() {
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [nextEnabled, setNextEnabled] = useState(false)
  const [showFeedbackPanel, setShowFeedbackPanel] = useState(false)

  const progressRef = useRef<HTMLDivElement | null>(null)
  const timerRef = useRef<number | null>(null)

  const currentQuestion = useMemo(() => questions[currentIndex], [currentIndex])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
      }
    }
  }, [])

  const resetProgressBar = () => {
    const el = progressRef.current
    if (!el) return
    el.style.transition = 'none'
    el.style.width = '0%'
    // force reflow
    // Force reflow to reset animation
    void el.offsetWidth
    el.style.transition = 'width 10s linear'
  }

  const startTimer = () => {
    const el = progressRef.current
    if (!el) return
    resetProgressBar()
    el.style.width = '100%'
    timerRef.current = window.setTimeout(() => {
      setNextEnabled(true)
      timerRef.current = null
    }, 10000)
  }

  const startQuiz = () => {
    setStarted(true)
    setCurrentIndex(0)
    setScore(0)
    setSelected(null)
    setShowFeedbackPanel(false)
    setNextEnabled(false)
  }

  const handleAnswer = (option: string) => {
    if (selected) return
    const isCorrect = option === currentQuestion.correctAnswer
    if (isCorrect) setScore((s) => s + 1)
    setSelected(option)
    setShowFeedbackPanel(true)
    setNextEnabled(false)
    startTimer()
  }

  const nextQuestion = () => {
    if (!nextEnabled) return
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1)
      setSelected(null)
      setShowFeedbackPanel(false)
      setNextEnabled(false)
      resetProgressBar()
    } else {
      // end
      setStarted(false)
    }
  }

  const restartQuiz = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setStarted(false)
    setCurrentIndex(0)
    setScore(0)
    setSelected(null)
    setShowFeedbackPanel(false)
    setNextEnabled(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl w-full h-full text-gray-800 overflow-hidden">
      {!started ? (
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Welcome to the Skills Gap Quiz!
          </h1>
          <p className="text-gray-600 mb-2">
            This quiz is based on a recent report analyzing Canada&apos;s labour market.
          </p>
          <p className="text-gray-600 mb-2">
            The report identifies key sectors facing worker shortages (like healthcare and skilled trades), highlights the growing need for post-secondary training (especially college and trades), and examines the mismatch between available skills and job demands, which impacts the economy. It also suggests potential solutions involving education and immigration policy.
          </p>
          <p className="text-gray-600 mb-6">
            Test your understanding with these 15 multiple-choice questions. After each answer, you&apos;ll receive immediate feedback and helpful follow-up information. Take a moment to read the information before moving on. Good luck!
          </p>
          <button
            onClick={startQuiz}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <div className="p-6 md:p-8 h-full flex flex-col overflow-hidden min-h-0">
          {/* Counter and question */}
          <div className="flex-1">
            <div
              className="flex w-full flex-1 min-h-0 overflow-hidden"
              id="quiz-content-area"
            >
              {/* Left question area */}
              <div
                id="question-area"
                className="pr-0 h-full overflow-auto"
                style={{
                  flexShrink: 0,
                  flexBasis: showFeedbackPanel ? '50%' : '100%',
                  transition: 'flex-basis 0.6s ease-in-out',
                  paddingRight: showFeedbackPanel ? '1.5rem' : 0
                }}
              >
                <div className="mb-6">
                  <p className="text-sm font-medium text-indigo-600">
                    {`Question ${currentIndex + 1} of ${questions.length}`}
                  </p>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-1">
                    {currentQuestion.question}
                  </h2>
                </div>
                <div className="space-y-3 pr-2">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = selected === opt
                    const isCorrect = opt === currentQuestion.correctAnswer
                    const base = buttonBaseClasses
                    const visual =
                      selected == null
                        ? ''
                        : isSelected && isCorrect
                        ? ' bg-green-500 text-white border-green-600'
                        : isSelected && !isCorrect
                        ? ' bg-red-500 text-white border-red-600'
                        : isCorrect
                        ? ' bg-green-500 text-white border-green-600 opacity-75'
                        : ''
                    return (
                      <button
                        key={opt}
                        className={base + visual}
                        onClick={() => handleAnswer(opt)}
                        disabled={selected !== null}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
                {/* Feedback message */}
                {selected && (
                  <div
                    id="feedback-message"
                    className={`mt-4 p-4 rounded-md text-sm font-medium ${
                      selected === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-l-4 border-green-500'
                        : 'bg-red-100 border-l-4 border-red-500'
                    }`}
                  >
                    {selected === currentQuestion.correctAnswer ? (
                      <span>Correct!</span>
                    ) : (
                      <span>
                        Incorrect. The correct answer was:{' '}
                        <strong className="font-semibold">
                          {currentQuestion.correctAnswer}
                        </strong>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Right feedback panel */}
              <div
                id="feedback-section"
                style={{
                  flexShrink: 0,
                  flexBasis: showFeedbackPanel ? '50%' : '0%'
                }}
                className="opacity-0 md:pl-6 h-full overflow-auto"
              >
                <div
                  className="h-full"
                  style={{
                    opacity: showFeedbackPanel ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out 0.3s'
                  }}
                >
                  <div className="bg-indigo-100 border-l-4 border-indigo-500 p-4 rounded-md text-sm">
                    <strong className="font-semibold block mb-1">
                      Follow-up Information:
                    </strong>
                    <span>{currentQuestion.proTip}</span>
                  </div>
                  <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-md text-sm mt-3">
                    <strong className="font-semibold block mb-1 text-orange-700">
                      Why it Matters:
                    </strong>
                    <p className="mb-2">{currentQuestion.soWhat.importance}</p>
                    <strong className="font-semibold block mb-1 text-orange-700">
                      What You Can Do:
                    </strong>
                    <p>{currentQuestion.soWhat.action}</p>
                  </div>
                  {/* Loading/progress */}
                  {selected && (
                    <div className="text-center mt-6">
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          ref={progressRef}
                          className="h-full bg-indigo-600 rounded-full"
                          style={{ width: '0%' }}
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Take a moment to review the information...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Next / End */}
          <div className="mt-6 flex-shrink-0">
            {currentIndex + 1 < questions.length ? (
              <button
                onClick={nextQuestion}
                disabled={!nextEnabled}
                className={`w-full font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md ${
                  nextEnabled
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-gray-500 text-white cursor-not-allowed'
                }`}
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled={!nextEnabled}
                className={`w-full font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md ${
                  nextEnabled
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-gray-500 text-white cursor-not-allowed'
                }`}
              >
                Finish Quiz
              </button>
            )}
          </div>

          {/* End screen overlay when finished */}
          {!started && (
            <div />
          )}
        </div>
      )}

      {/* End Page */}
      {started === false && currentIndex === questions.length && (
        <div className="p-6 md:p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Congratulations!
          </h1>
          <p className="text-gray-600 mb-4">You have completed the quiz.</p>
          <p className="text-lg font-semibold text-gray-700 mb-6">
            {`Your score: ${score} out of ${questions.length}`}
          </p>
          <button
            onClick={restartQuiz}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  )
}


