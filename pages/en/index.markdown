---
layout: home
lang: en
permalink: en/
---

<section class="bg-primary-light" id="info">
    <div class="container">
        <h2 class="section-heading">Project Information</h2>
        <div class="row">
            <div class="col-lg-7 col-md-12">
                 <p class="text-justify">
                Predictions shape all of our lives - both in our private and professional lives. The spectrum ranges from everyday weather forecasts to the prediction of the course of diseases and the determination of optimal maintenance times for industrial plants. A significant part of the success of predictions can be attributed to the application and continuous development of computer-aided technologies, such as simulation or machine learning. However, the information of a prediction inevitably raises the question of an accurate response, i.e. further processing of the information. This question is addressed by the research field of prescriptive analytics, which is currently still being developed: the data-based derivation of recommendations for action. In order to generate accurate but also trustworthy recommendations, a combination of several technology fields is necessary.
                </p>
            </div>
            <div class="col-lg-5 col-md-12 text-center">
                <figure class="image-box"><img id="image-sketch1" src="/{{ site.data.assets.image-sketch1 }}" /></figure>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5 col-md-12 text-center">
                <figure class="image-box"><img id="image-sketch2" src="/{{ site.data.assets.image-sketch2 }}" /></figure>
            </div>
            <div class="col-lg-7 col-md-12">
                 <p class="text-justify">
                 In addition to the accuracy and trustworthiness of recommendations for action, the speed of their creation is of particular importance in order to be able to initiate measures as quickly as possible. In the research project Secure Prescriptive Analytics, a new modeling concept is to be developed that enables a complex overall system - e.g., an industrial plant - to be broken down variably and granularly into submodels. For each submodel, so-called surrogate models are then trained, which are faster in their evaluation than the original model. According to the requirements of the domain experts, the development of the surrogate models should be able to be done with different methods - e.g. with the help of Clear-Box or Privacy Preserving Machine Learning. Subsequently, the submodels are assembled into an accelerated digital representation of the overall system.  
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-7 col-md-12">
                 <p class="text-justify">
                 Within the research project, the outlined modeling concept will be implemented in the form of an open source software platform that will support the linking of models and optimization components. Users of the platform will be able to define problems - e.g. the optimization of existing production plans using the defined model and various constraints (computation time, confidentiality of data, model interpretability) - and receive corresponding recommendations for action. Thus, the main goal of the project is the development of a prescriptive analytics concept and its subsequent implementation that combines existing research disciplines and makes complex, application-oriented optimization issues solvable.
                </p>
            </div>
            <div class="col-lg-5 col-md-12 text-center">
                <figure class="image-box"><img id="image-sketch3" src="/{{ site.data.assets.image-sketch3 }}" /></figure>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <p class="text-justify">
                    The Secure Prescriptive Analytics project is financed by the country of Upper Austria as part of the program of the country to stimulate the development / expansion of forward-looking research fields at the Upper Austrian non-university research institutions in the period 01.01.2022 - 31.12.2029. For more information on the economic and research strategy #upperVISION2030 (field of action "Digital Transformation") see <a href="{{ site.data.i18n.t.footer.uv30-link[page.lang] }}">www.uppervision.at</a>.
                </p>
            </div>
            <div class="col-lg-12 col-md-12 facts">
                <div>
                <h4 class="info-headline">Fact Table</h4>
                <table class="info-table">
                    <tr><td>Title:</td><td>Secure Prescriptive Analytics</td></tr>
                    <tr><td>Runtime:</td><td>01/2022 - 12/2025</td></tr>
                    <tr><td>Team:</td><td>FH Oberösterreich Campus Hagenberg, RISC Software GmbH, SCCH Software Competence Center GmbH</td></tr>
                    <tr><td>Topics:</td><td>Dynamic Optimization, Modeling and Simulation, Interpretable & Privacy-Preserving Machine Learning</td></tr>
                    <tr><td>Funding:</td><td>Land Oberösterreich, for more Information see <a href="{{ site.data.i18n.t.footer.uv30-link[page.lang] }}">www.uppervision.at</a></td></tr>
                </table>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="bg-dark" id="blog">
    <div class="container">
        <h2>From our blog (in german only)</h2>
        {% if site.posts.size > 0 %}
        <div class="row">
            <div class="col-lg-12 col-md-12">
                {% for post in site.posts limit:3 %}
                    {% include post_preview.html %}
                {% endfor %}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-right">
                <a href="/blog" id="btn-blog" class="btn btn-xl btn-slim-primary blog-button">More from our blog</a>
            </div>
        </div>
        {% else %}
        <div class="row"><div class="col-lg-12"><h4>Sorry, there are no posts at the moment.</h4></div></div>
        {% endif %}
    </div>
</section>

<section class="" id="team">
    <div class="container">
        <h2 class="section-heading">Team</h2>
            <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <p>The development of innovative methods and concepts in the new research field of Secure Prescriptive Analytics requires the synthesis of a variety of research disciplines and technologies. A key to the success of this research project therefore lies in the collaboration of an interdisciplinary team that brings in and combines different competencies. The project Secure Prescriptive Analytics involves researchers of the <i>Softwarepark Hagenberg</i>-Organizations <i>FH OÖ F&E GmbH research group HEAL, RISC Software GmbH</i> and <i>Software Competence Center Hagenberg GmbH</i>.</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row image-row">
            <div class="col-lg-3 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.i18n.t.links.fhooe[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-fhlogo" src="/{{ site.data.assets.image-fhlogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-3 col-md-12 text-center topic-box">            
                <a target="_blank" href="{{ site.data.i18n.t.links.risc[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-risclogo" src="/{{ site.data.assets.image-risclogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-3 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.i18n.t.links.scch[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-scchlogo" src="/{{ site.data.assets.image-scchlogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-3 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.i18n.t.links.swph[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-swphlogo" src="/{{ site.data.assets.image-swphlogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
        </div>
    </div>
</section>

<section class="bg-secondary" id="contact">
    <div class="container text-justify">
        <h2 class="section-heading">Contact</h2>
        <div class="row contact-info">
            <div class="col-lg-6 col-md-12">
                <h4>FH-Prof. PD DI Dr. Michael Affenzeller</h4>
                <table class="info-table">
                    <tr><td>Role:</td><td>Project Manager</td></tr>
                    <tr><td>Phone:</td><td>+43 50804 22031</td></tr>                  
                    <tr><td>Mail:</td><td><a href="mailto:michael.affenzeller@fh-hagenberg.at">michael.affenzeller@fh-hagenberg.at</a></td></tr>
                </table>
            </div>
            <div class="col-lg-6 col-md-12">
                <h4>Mag. Michaela Beneder</h4>
                <table class="info-table">
                    <tr><td>Role:</td><td>Coordination</td></tr>
                    <tr><td>Phone:</td><td>+43 664 80484 27160</td></tr>                    
                    <tr><td>Mail:</td><td><a href="mailto:michaela.beneder@fh-hagenberg.at">michaele.beneder@fh-hagenberg.at</a></td></tr>
                </table>
            </div>
        </div>
    </div>
</section>

<section class="map-section">
    <div id="map"></div>
</section>