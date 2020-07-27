import React from "react";
import { Grid } from "@material-ui/core";
import "./PageNode.css";

const PageNode = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className="PageContainerNode"
      >
        <Grid item xs={15}>
          <h1>Node</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>Principe de Node</h2>
        </Grid>
        <Grid item xs={12}>
          <p>
            Node.js est un environnement d'exécution JavaScript multiplateforme
            gratuit, open source, qui permet aux développeurs d'écrire des
            outils de ligne de commande et des scripts côté serveur en dehors
            d'un navigateur. Node.js exécute le moteur JavaScript V8, le cœur de
            Google Chrome, en dehors du navigateur. Cela permet à Node.js d'être
            très performant.
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            Une application Node.js est exécutée en un seul processus, sans
            créer de nouveau thread pour chaque demande. Node.js fournit un
            ensemble de primitives d'E / S asynchrones dans sa bibliothèque
            standard qui empêchent le code JavaScript de bloquer et
            généralement, les bibliothèques dans Node.js sont écrites en
            utilisant des paradigmes non bloquants, faisant du comportement de
            blocage l'exception plutôt que la norme. Lorsque Node.js effectue
            une opération d'E / S, comme la lecture depuis le réseau, l'accès à
            une base de données ou au système de fichiers, au lieu de bloquer le
            thread et de gaspiller des cycles de processeur en attente, Node.js
            reprendra les opérations lorsque la réponse reviendra.
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            Cela permet à Node.js de gérer des milliers de connexions
            simultanées avec un seul serveur sans introduire le fardeau de la
            gestion de la concurrence des threads, ce qui pourrait être une
            source importante de bogues.
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            Node.js présente un avantage unique car des millions de développeurs
            frontend qui écrivent du JavaScript pour le navigateur sont
            désormais capables d'écrire le code côté serveur en plus du code
            côté client sans avoir besoin d'apprendre un langage complètement
            différent.
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            Dans Node.js, les nouvelles normes ECMAScript peuvent être utilisées
            sans problème, car vous n'avez pas à attendre que tous vos
            utilisateurs mettent à jour leurs navigateurs - vous êtes en charge
            de décider quelle version d'ECMAScript utiliser en changeant la
            version de Node.js, et vous pouvez également activer des
            fonctionnalités expérimentales spécifiques en exécutant Node.js avec
            des indicateurs. Voici le lien qui vous emmènera directement vers la doc: <a href="https://nodejs.org/en/docs/">Node</a>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageNode;
