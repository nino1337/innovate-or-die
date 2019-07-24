<template>
  <div id="app">
    <Header />
    <Stage id="home" />
    <main class="container">
      <Section
        id="event"
        title="Event"
        subline="Das Event für Entscheidungsträger aus Management, Marketing und Innovation"
        background="blue"
      >
        <p>Business-as-usual in der Versicherungbranche? Schon längst Geschichte. Die Ansprüche der Kunden im digitalen Wandel haben sich fundamental verändert – und zwingen somit auch Versicherungsunternehmen zu Umbrüchen in der unternehmerischen Ausrichtung.</p>
        <p>Wir widmen uns einen Abend lang den aktuellen Themen und Trends, mit denen Sie sich heute und in Zukunft optimal aufstellen können. Sie erwarten Talks* und Paneldiskussionen zu u.a. folgenden Fragen:</p>
        <ul>
          <li>Wie digital muss Versicherung heute sein?</li>
          <li>Welche Services erwartet der Kunde?</li>
          <li>Was kann Versicherung von E-Commerce Giganten lernen?</li>
          <li>Was sind Erfolgskriterien, um langfristig am Markt erfolgreich zu bleiben?</li>
        </ul>
        <div class="util-two-column">
          <TeaserCta
            date="28.03.2019"
            location="köln"
            text="17.30 - 22.00 Uhr incl. <br /> Get-together (Food & Beverages)"
            ctaLink="#anmelden"
            ctaText="Jetzt anmelden"
          />
        </div>
        <p>
          * Die Vorträge beinhalten
          keine Produktpräsentationen.
        </p>
      </Section>
      <Section
        id="trendguide"
        title="Trendguide"
        subline="Versicherungsbranche im digitalen Wandel"
        background="red"
        :wave="true"
      >
        <p>Aufschlussreich praktisch, auf den Punkt. Mit diesem Trendguide machen Sie sich ein Bild über Themen und Herausforderungen von Versicherungsunternehmen im digitalen Zeitalter.</p>
        <div class="container container--small">
          <div class="section__sub-subline">Für Sie direkt zum DOWNLOAD!</div>
          <Form
            form-action="/"
            :inputs="form"
            text="* Mit Betätigung des Jetzt Herunterladen-Buttons bestätigen Sie, dass Sie Datenschutzhinweise gelesen haben und diesen zustimmen."
            cta="button--black"
            ctaText="jetzt herunterladen"
          />
        </div>
      </Section>
      <Section id="programm" subtitle title="Programm 2019" background="blue-dark">
        <p
          class="util-align-center"
        >Zur Orientierung erhalten Sie hier einen Einblick in das Programm 2019. Die Themenblöcke beinhalten Input von Experten und eine anschließende Arbeit in Kleingruppen zu den konkreten Fragestellungen der Teilnehmer.</p>
        <TeaserPerson
          imgTitle="max-callsen"
          timeTable="17:30 - 18:30 Uhr"
          personName="Max Helke, Brandung"
          title="BEGRÜßUNG UND KEYNOTE"
          citate="Versicherung im digitalen Wandel – wie wir heute denken müssen, um langfristig am Markt erfolgreich zu bleiben."
          :isLeft="true"
        />
        <TeaserPerson
          imgTitle="matthias-brandstaedter"
          timeTable="18:30 – 19:30 Uhr"
          title="INNOVATIVE GESCHÄFTS-MODELLE"
          personName="Michael Türk, Spryker"
          citate="Was kann Versicherung von E-Commerce Giganten lernen?"
        />

        <TeaserPerson
          imgTitle="michael-tobias"
          timeTable="19:30 – 20:30 Uhr"
          title="PANEL-DISKUSSION"
          citate="Geführter Austausch von Experten aus der Branche – u.a. thematisieren wir, wie digital Versicherung heute sein muss, welche Services der Kunde erwartet und wie diese praktisch ergründet und bedient werden (können)."
          :isLeft="true"
        />
        <TeaserIcon
          imgSource="img/icons/wine.svg"
          imgTitle="Wein"
          timeTable="Ab 20:30 Uhr"
          title="get-together"
        />
      </Section>
      <Section id="speaker" title="Speaker" background="blue">
        <TeaserSpeaker :speaker="speaker" />
      </Section>
      <Section
        id="anmelden"
        title="Jetzt anmelden!"
        subline="Das Event für Entscheidungsträger aus Management, Marketing und Innovation"
        background="black"
      >
        <div class="container container--small">
          <div class="section__subline util-align-center">Wir freuen uns auf Sie!</div>
          <p
            class="util-align-center"
          >Melden Sie sich hier verbindlich für das Event am 26.09.2019 in Köln an.</p>
          <Form
            form-action="/"
            :inputs="form"
            text="* Diese Anmeldung ist verbindlich, aber jederzeit übertragbar. Mit Betätigung des Jetzt Herunterladen-Buttons bestätigen Sie, dass Sie Datenschutzhinweise gelesen haben und diesen zustimmen."
            cta="button--blue"
            ctaText="absenden"
          >
            <div class="form__select-wrapper">
              <select name="ticket-anzahl" required>
                <option value disabled selected>Ticket Anzahl</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="form__subline util-align-center">29.09.2019, 17:30–22 Uhr, Köln</div>
          </Form>
        </div>
      </Section>
      <Section
        id="location"
        title="Location"
        subline="Die Veranstaltung findet in der #sandboxcologne  in der brandung statt."
        background="image"
        :wave="true"
        :backgroundImage="`img/koeln.jpg`"
      >
        <TeaserCircle key="1" title="brandung" :address="['Vogelsanger Straße 76', '50823 Köln']" />
      </Section>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Section from "./components/Section/Section.vue";
import Stage from "./components/Stage/Stage.vue";
import Tabs from "./components/Tabs/Tabs.vue";
import TeaserPerson from "./components/Teaser/TeaserPerson/TeaserPerson.vue";
import TeaserIcon from "./components/Teaser/TeaserIcon/TeaserIcon.vue";
import TeaserCta from "./components/Teaser/TeaserCta/TeaserCta.vue";
import TeaserCircle from "./components/Teaser/TeaserCircle/TeaserCircle.vue";
import TeaserSpeaker from "./components/Teaser/TeaserSpeaker/TeaserSpeaker.vue";
import Footer from "./components/Footer/Footer.vue";
import Form from "./components/Form/Form.vue";

// data
import form from "./components/Form/data/forms";
import speaker from "./components/Teaser/TeaserSpeaker/data/speaker";

export default {
  name: "app",
  components: {
    Header,
    Section,
    Stage,
    Footer,
    Tabs,
    TeaserPerson,
    TeaserIcon,
    TeaserCta,
    TeaserCircle,
    TeaserSpeaker,
    Form
  },
  data() {
    return {
      form,
      speaker
    };
  }
};
</script>

<style lang="scss">
@import "assets/scss/main.scss";

.scale-enter-active {
  transition-delay: 1s;
  transition: transform 0.5s cubic-bezier(1, 1, 0.57, 1.36);
  transform: scale(0);
  opacity: 0;
  visibility: hidden;
}

.scale-enter-to {
  transform: scale(1);
  opacity: 1;
  visibility: visible;
}

.transform-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
  opacity: 1;
  position: absolute;
}

.transform-leave-to {
  opacity: 0;
  transform: translateX(200%);
}

.transform-enter-active {
  transition: all 0.5s;
  transform: translateX(-200%);
}

.transform-enter-to {
  transform: translateX(0);
}
</style>
