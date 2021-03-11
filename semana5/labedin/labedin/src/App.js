import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/JHct1Pz5CSDxsKddR2vNGWzpgNshpjLFtpEm-dqbe_YdLmwdFwLBkRQEfTvc0Q1BUao0IyNVe2MF4adszw8YpxnCFh3vdZhbv1E0HBqBkdti3ZKuNLfh0IhdNNOEsma3fqGM_YX23XfKV_JtFOQFuU7ac_oMiNIa_13q_A2dUY836Peb9-RRvhOaDt9hq2LBKUZMA8_Wnbv7fle5jM4K0E_f9SsQkpeaVOraDY8z2Mz_AttlJ-vrnPzfa9DhctUWT49gilsdZRro0WA8ANQ_pixx2xpZTpEKl7eu6wdPHAgjL-NVEicUwPx5aaBai_MSCmkRGNcCVVNaFoj_F4qC2hHDcS6CSNuE0B8sJbseengWTRw5WtQxm3J-b_h6IgUqCMzl4xhfiavW8r70NEjsimGBFX6EVvwwLSqtWC7WLlrgZ5v6BBwjp3T5tGLczrItOpHXqv5hVgCjvYuJfjoApYLHiG9pQ12IKrM_zeaRPcRgXAog_rD0Lo6gPuUfe-DFpJ8Ey1wxufC7ORdi3qmMINnHbM8MR3z1aZ5nhVIVEhX_ZQ6zJXoHKXDbz01k27uFOVu56TZRNcX90K7R-Bkjlbw8YsUbfIau8075LtyBhoi0nn7CiVzJnwTbLBncVu1jfRABiVPxTW_znpirzmQg-m-Z0pKrjLM8PhBowQzttjlpPhVZALqxhc6XMdrf0w=s625-no?authuser=0" 
          nome="Frank de Castro Filho" 
          descricao="Oi, eu sou o Frank. Sou aluno da Labenu. Adoro programar e cozinhar, depende do meu humor, ver filmes é meu passa tempo favorito."/>
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno 
      
        imagem="https://lh3.googleusercontent.com/Dlhddp2utq-EN3XIurOW3YBTTVKFVgtOyjHIKfJG4XvKfcLzvlyDtu9nbPGb0FjCBVKIr1hNpXeSeObVdJAkkGoCVUBRBOyDo6DAcNUE9s2jzga9aFc_Xa4B8eOHstSJSzDiA2oQaklyQzU2DEv71KqxAaNLYWKH5kQfR7GbB9HAUwMvBOxeS7PRbBGOWUIXaVA-8feHwyWho1nZKf1UElT2vCCc8oUxSKrVSxfufQPPa0B1qlfbhjcsH9ey4-dkre644aMAcY0PVbecGTf5LhQt4GermU_8-szfuBFZQUfzkbACuTaAom4jMBWWrsruJeqr7nvxsCIQQ8pDUaFKi73PQo-fdUU7wK9tWmSL-pcLIqFvpALIdEVGX_1_6oJm-p0vJpOF4SKk_lCBh6pv5WfQUUCFkuo6rvJH0Tw9assJ6HJdMITa0IkHL0grIlxGwq--Km52REbq-2XrgZguyZMiNByPAib7iPIR-hL9F1NysPIS4x-aKtIwOhSs_ywExLvDDk14062zl2zuD3KSNzZPPNMOw1WtndghZyRzD1dgpi1crLiBsVe3nuHT3pprOdYBEevx4h1kFxNHiPykythHXSfDf9er-x2yq0WVW9GfvxJcwR8PlUkV0kZj5pCsSh2wlYIbh9CjZScvLC50uOK_ImMLEjx6G5hsGgVu6w_gHRz8YblJusAWm8uMDA=s600-no?authuser=0"
        titulo="Email: "
        descriçao="frankcf60@gmail.com"
      />
      <CardPequeno

        imagem="https://image.flaticon.com/icons/png/512/9/9275.png"
        titulo="Endereço: "
        descriçao="Castro/PR"

      />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
