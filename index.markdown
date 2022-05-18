---
layout: home
lang: de
---

<section class="bg-primary-light" id="info">
    <div class="container">
        <h2 class="section-heading">Projektinformation</h2>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                 <p class="text-justify">
                 Vorhersagen prägen unser aller Leben – im Privaten wie auch im Beruflichen. Dabei reicht das Spektrum von der alltäglichen Wettervorhersage, über die Prognose von Krankheitsverläufen, bis hin zur Vorhersage optimaler Wartungszeitpunkte für komplexe industrielle Anlagen. Die Grundlage für Vorhersagen bilden Daten und deren korrekte Auswertung: Mit der zunehmenden Digitalisierung aller Lebensbereiche und die damit einhergehende, stetig wachsende Menge verfügbarer Daten, konnten in den vergangenen Jahren einerseits die Vorhersagegenauigkeit enorm gesteigert werden und andererseits neue Anwendungsfelder erschlossen werden. Einen wesentlichen Anteil am Erfolg von Vorhersagen ist der Anwendung und kontinuierlichen Weiterentwicklung computergestützter Technologien, wie Data Mining, Simulation oder Machine Learning, zuzuschreiben. Diese ermöglichen es, große Datenmengen in adäquater Zeit auszuwerten und dennoch eine möglichst exakte Aussage zu treffen. Die Information einer Vorhersage – ein mit gewisser Wahrscheinlichkeit eintretender Zustand oder Ereignis – wirft jedoch zwangsläufig die Frage nach einer akkuraten Reaktion, also Weiterverarbeitung der Information, auf. Mit dieser Frage beschäftigt sich das derzeit noch im Aufbau befindliche Forschungsfeld der Prescriptive Analytics: Die datenbasierte Ableitung von Handlungsempfehlungen. Die Sicherheit und Vertrauenswürdigkeit der Daten sowie deren Auswertung repräsentieren aufgrund der allgegenwärtigen Aufzeichnung zwei immer stärker in den Vordergrund rückende Aspekte von der Datenakquise bis zur Vorhersage. Im Fall von Prescriptive Analytics werden diese Aspekte sogar noch wichtiger, da es von der automatisierten Erzeugung von Handlungsempfehlungen bis zu deren Umsetzung in der Realität, keinen weiteren Kontrollmechanismus mehr gibt. 
                </p>
                <p class="text-justify">
                    Das Projekt Secure Prescriptive Analytics wird durch das Land Oberösterreich finanziert als Teil des Programms des Landes Oö. zur Stimulierung der Erschließung / Erweiterung von zukunftsweisenden Forschungsfeldern bei den Oö. außeruniversitären Forschungseinrichtungen im Zeitraum 01.01.2022 – 31.12.2029. Nähere Informationen zur Wirtschafts- und Forschungsstrategie #upperVISION2030 (Handlungsfeld "Digitale Transformation") unter <a href="{{ site.data.i18n.t.footer.uv30-link[page.lang] }}">www.uppervision.at</a>.
                </p>
            </div>
            <div class="col-lg-12 col-md-12 facts">
                <div>
                <h4 class="info-headline">Projektdaten</h4>
                <table class="info-table">
                    <tr><td>Titel:</td><td>Secure Prescriptive Analytics</td></tr>
                    <tr><td>Laufzeit:</td><td>01/2022 - 12/2025</td></tr>
                    <tr><td>Team:</td><td>FH Oberösterreich Campus Hagenberg, RISC Software GmbH, SCCH Software Competence Center GmbH</td></tr>
                    <tr><td>Themen:</td><td>Dynamic Optimization, Modeling and Simulation, Interpretable & Privacy-Preserving Machine Learning</td></tr>
                    <tr><td>Fördergeber:</td><td>Land Oberösterreich, nähere Informationen unter <a href="{{ site.data.i18n.t.footer.uv30-link[page.lang] }}">www.uppervision.at</a></td></tr>
                </table>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <br/>
                <p class="text-justify">Ein Hauptziel des Projekts besteht in der Dissemination der gewonnenen Erkenntnisse in Form öffentlicher Vorträge, Workshops mit Industriebetrieben und Publikationen in wissenschaftlichen Journalen und Magazinen.</p>
                <a href="/publications" id="btn-publications" class="btn btn-xl btn-slim-primary">Publikationen</a>
            </div>
        </div>
    </div>
</section>

<section class="bg-dark" id="blog">
    <div class="container">
        <h2>Von unserem Blog</h2>
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
                <a href="/blog" id="btn-blog" class="btn btn-xl btn-slim-primary blog-button">Mehr von unserem Blog</a>
            </div>
        </div>
        {% else %}
        <div class="row"><div class="col-lg-12"><h4>Tut uns Leid, im Moment stehen keine Beiträge zu diesem Thema zur Verfügung.</h4></div></div>
        {% endif %}
    </div>
</section>

<section class="" id="team">
    <div class="container">
        <h2 class="section-heading">Team</h2>
            <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <p>Die Entwicklung innovativer Methoden und Konzepte im neuen Forschungsfeld Secure Prescriptive Analytics verlangt nach der Synthese einer Vielzahl an Forschungsdisziplinen und Technologien. Ein Schlüssel zum Erfolg dieses Forschungsprojekts liegt daher in der Zusammenarbeit eines interdispziplinären Teams, das verschiedene Kompetenzen einbringt und zusammenführt.</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row image-row">
            <div class="col-lg-4 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.links.fhooe }}"><br/>
                <figure class="image-box"><img id="image-fhlogo" src="/{{ site.data.assets.image-fhlogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-4 col-md-12 text-center topic-box">            
                <a target="_blank" href="{{ site.data.links.risc }}"><br/>
                <figure class="image-box"><img id="image-risclogo" src="/{{ site.data.assets.image-risclogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-4 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.links.scch }}"><br/>
                <figure class="image-box"><img id="image-scchlogo" src="/{{ site.data.assets.image-scchlogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
        </div>
    </div>

</section>

<!-- <section class="" id="partners">
    <div class="container">
        <h2 class="section-heading">Partner</h2>
    </div>
</section> -->

<section class="bg-secondary" id="contact">
    <div class="container text-justify">
        <h2 class="section-heading">Kontakt</h2>
        <div class="row contact-info">
            <div class="col-lg-6 col-md-12">
                <h4>FH-Prof. PD DI Dr. Michael Affenzeller</h4>
                <table class="info-table">
                    <tr><td>Funktion:</td><td>Projektleitung</td></tr>
                    <tr><td>Tel.:</td><td>+43 50804 22031</td></tr>                  
                    <tr><td>Mail:</td><td><a href="mailto:michael.affenzeller@fh-hagenberg.at">michael.affenzeller@fh-hagenberg.at</a></td></tr>
                </table>
            </div>
            <div class="col-lg-6 col-md-12">
                <h4>Mag. Michaela Beneder</h4>
                <table class="info-table">
                    <tr><td>Funktion:</td><td>Koordination</td></tr>
                    <tr><td>Tel.:</td><td>+43 664 80484 27160</td></tr>                    
                    <tr><td>Mail:</td><td><a href="mailto:michaela.beneder@fh-hagenberg.at">michaele.beneder@fh-hagenberg.at</a></td></tr>
                </table>
            </div>
        </div>
    </div>
</section>

<section class="map-section">
    <div id="map"></div>
</section>