# Documentation pour le composant OAR-API
1) [Installation de l'environnement développement](#env-dev)
2) [Découvrir Angular2](#install-quickstart)


## Environnement de developpement

###  1) Visual Studio Code  <a name="env-dev"></a>
Nous utiliserons comme IDE Visual Studio Code (VSC). Léger et performant c’est une excellent outils qui n'est pas en reste face aux plus gros. De plus Microsoft étant derrière TypeScript et Angular2 nous avons l’assurance d’une bonne intégration. 
VSC est disponible sur toutes les plateformes.

- En savoir plus : https://johnpapa.net/visual-studio-code/
- Pour installer Visual Studio Code : https://code.visualstudio.com/


### 2) NodeJs 

Installez NodeJS : https://nodejs.org/en/

#### Sous linux :

Pour s'assurer que NodeJs fonctionne :
`node --version`

*si node ne fonctionne pas , essayé :* 
```
nodejs --version`
```

Dans ce cas, faire un alias avec la commande : 
```
ln -s /usr/bin/nodejs /usr/bin/node
```

---

note : npm 3 peut poser des problème, pour connaitre la version de npm : `npm -v`


### 3) Installez TypeScript

#### Sous linux :

Pour installer TypeScript globalement :

```
sudo npm install -g typescript
```

#### Sous Windows : 
```
npm install -g typescript
```

## Découverte d'Angular2 à partir du projet QuickStart <a name="install-quickstart"></a>

#### A partir du projet QuickStart
https://github.com/angular/quickstart

## Installation de OAR Docker (sous linux)

### 1) Installation de Docker :
https://docs.docker.com/engine/installation/

### 2) Installation de Python et venv
Installé Python si ce n'est pas fait. Puis installez Virtualenv 

``` 
sudo apt install virtualenv
```

Créer votre virtualenv dans votre projet

``` 
$ cd ~/code/myproject/
$ virtualenv oar-env 
``` 

Pour en savoir plus : https://www.dabapps.com/blog/introduction-to-pip-and-virtualenv-python/

### 4) Installation de oar-docker :
Dans votre projet, lancez votre virtualenv avec la commande :

```
source oar-env/bin/activate
```

https://ciment.ujf-grenoble.fr/wiki/index.php/OAR3_devel

https://github.com/oar-team/oar-docker


## Webpack 
https://semaphoreci.com/community/tutorials/setting-up-angular-2-with-webpack

## OAR-API
