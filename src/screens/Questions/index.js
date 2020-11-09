import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Questions = () => {
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(300);
  const [result, setResult] = useState(null);
  const history = useHistory();
  const questionsData = [
    {
      id: 1,
      pergunta: "Qual é a resposta correta?",
      options: [
        {
          resposta: "Essa?",
          correta: false
        },
        {
          resposta: "Talvez essa?",
          correta: true
        }
        
      ]
    },

    {
      id: 2,
      pergunta: "Qual é a resposta correta rs?",
      options: [
        {
          resposta: "Essa?",
          correta: true
        },

        {
          resposta: "Talvez essa?",
          correta: false
        }
      ]
    },
    {
      id: 3,
      pergunta: "Bla bla bla?",
      options: [
        {
          resposta: "Essa?",
          correta: false
        },
        {
          resposta: "Talvez essa?",
          correta: true
        }
        
      ]
    }
  ]

  function submitAnswers(){
    // e.preventDefault();

    // const respostaCorreta = questionsData.map((teste) => {
    //  teste.options.forEach((correct) => {
    //     if(correct.correta === true ){
          
    //     }
    //   })
    // })
    // console.log(answers)
    setResult(true)
  }

  useEffect(() => {
    
    setInterval(() => {
      setTime( time => time -1)
    },1000)
  },[])

  useEffect(() => {
    if( time === 0 ){
      history.push('/')
    }
  })

  function format(cronometer) {   
    var mins = ~~((cronometer % 3600) / 60);
    var secs = ~~cronometer % 60;
    var ret = "";

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

  // useEffect(() => {
  //   const respostaCorreta = questionsData.map((teste) => {
  //    teste.options.forEach((correct) => {
  //       if(correct.correta === true ){
          
  //       }
  //     })
  //   })
  // },[])

  return (
    <>
    <div id="pagina-principal-questions">
      <h1> Perguntas</h1>
      <span className="time-questions"><i className="far fa-clock"></i> {format(time)}</span>
      <div className="pagina-principal-questions-content">

     
      {
        questionsData.map((questions) => {
          return (
            <form className="pagina-principal-questions-content" key={questions.id}>
              <h2>{questions.id}. {questions.pergunta}</h2>
                {questions.options.map((option,index) => {
                  return (
                    <label className="card-input-box-container" key={index}>
                      <input type="radio" name="product" className="card-input-element" value={option.resposta.correta} onChange={(e) => { setAnswers(e.target.value) }}/>
                      <div className="card-input">
                        <div className="panel-heading" >{option.resposta}</div>
                      </div>
                  </label>
                  )
                })}
            </form>
          )
        })
      }
        <button onClick={submitAnswers}> Confirmar</button>
      </div>
      {
        result &&
        <div className="result-container">
          <h3>Parabéns você acertou 3 questões</h3>
        </div>
      }
      
      
    </div>

  
    </>
  )
}

export default Questions;