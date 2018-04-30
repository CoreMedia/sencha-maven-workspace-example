Sencha Maven Workspace Example
==============================
This repository contains an example project that shows how to build Ext JS 6 Apps with [Maven](http://maven.apache.org/),
using [Jangaroo](http://www.jangaroo.net)'s Maven plugin that again uses [Sencha Cmd](http://docs.sencha.com/cmd/).

The tool and a slightly outdated version of this example have been presented by Frank Wienberg on
SenchaCon 2016 in the session
[Building Enterprise Ext JS Apps with Mavenized Sencha Cmd](https://www.senchacon.com/sessions/#session_57b7809da3955) ([slides](https://www.slideshare.net/senchainc/senchacon-2016-building-enterprise-ext-js-apps-with-mavenized-sencha-cmd-frank-wienberg/1), [video](https://www.senchacon.com/videos-slides/)).

Getting Started
---------------
1. Install Java 8
2. Install Apache Maven >= 3.3
3. Install Sencha Cmd 6.x (as of now, 6.2.2)

Checkpoint:
- `mvn -v` - no errors
- `sencha` - no errors

3. Clone this repository
4. In the repository's root directory, run `mvn install`. Watch Maven download and build stuff.
6. Run `mvn -f my-app jangaroo:app-watch`
7. Open `http://localhost:1841/my-app/target/app/` in your browser. Admire an Ext JS "Hello World" dialog.
