## Build Lorry-UI using Vagrant.


2) To get https://github.com/introllo/lorry-ui to build...

sudo apt-get install -y libfontconfig && sudo gem install compass

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  && [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

nvm install stable
nvm use stable
npm install -g grunt-cli
npm install -g bower
npm install -g generator-karma

  npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
  npm WARN deprecated formatio@1.2.0: This package is unmaintained. Use @sinonjs/formatio instead
  > spawn-sync@1.0.15 postinstall /home/vagrant/.nvm/versions/node/v9.11.1/lib/node_modules/generator-karma/node_modules/spawn-sync
  > node postinstall
  + generator-karma@2.0.1
  added 524 packages in 68.369s

npm install -g generator-angular 

  npm WARN deprecated generator-angular@0.16.0: Deprecated
  npm WARN deprecated graceful-fs@2.0.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
  npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
  npm WARN deprecated CSSselect@0.4.1: the module is now available as 'css-select'
  npm WARN deprecated CSSwhat@0.4.7: the module is now available as 'css-what'
  npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
  npm WARN deprecated natives@1.1.2: This module relies on Node.js's internals and will break at some point. Do not use it, and update to graceful-fs@4.x.
  npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
  npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
  npm WARN deprecated tough-cookie@0.9.15: ReDoS vulnerability parsing Set-Cookie https://nodesecurity.io/advisories/130
  npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
  npm WARN generator-angular@0.16.0 requires a peer of generator-karma@>=0.9.0 but none is installed. You must install peer dependencies yourself.
  + generator-angular@0.16.0
  added 204 packages in 16.339s

npm install -g yo
npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs --save-dev

  npm WARN deprecated phantomjs@2.1.7: Package renamed to phantomjs-prebuilt. Please update 'phantomjs' package references to 'phantomjs-prebuilt'
  npm WARN deprecated nodemailer@2.7.2: All versions below 4.0.1 of Nodemailer are deprecated. See https://nodemailer.com/status/
  npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
  npm WARN deprecated socks@1.1.10: If using 2.x branch, please upgrade to at least 2.1.6 to avoid a serious bug with socket data flow and an import issue introduced in 2.1.0
  npm WARN deprecated socks@1.1.9: If using 2.x branch, please upgrade to at least 2.1.6 to avoid a serious bug with socket data flow and an import issue introduced in 2.1.0
  npm WARN deprecated mailcomposer@4.0.1: This project is unmaintained
  npm WARN deprecated buildmail@4.0.1: This project is unmaintained
  npm WARN deprecated tough-cookie@2.2.2: ReDoS vulnerability parsing Set-Cookie https://nodesecurity.io/advisories/130

  > uws@9.14.0 install /home/vagrant/node_modules/uws
  > node-gyp rebuild > build_log.txt 2>&1 || exit 0


  > phantomjs-prebuilt@2.1.16 install /home/vagrant/node_modules/karma-phantomjs-launcher/node_modules/phantomjs-prebuilt
  > node install.js

  PhantomJS not found on PATH
  Downloading https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-linux-x86_64.tar.bz2
  Saving to /tmp/phantomjs/phantomjs-2.1.1-linux-x86_64.tar.bz2
  Receiving...
    [====================================----] 90%
  Received 22866K total.
  Extracting tar contents (via spawned process)
  Removing /home/vagrant/node_modules/karma-phantomjs-launcher/node_modules/phantomjs-prebuilt/lib/phantom
  Copying extracted folder /tmp/phantomjs/phantomjs-2.1.1-linux-x86_64.tar.bz2-extract-1522948777079/phantomjs-2.1.1-linux-x86_64 -> /home/vagrant/node_modules/karma-phantomjs-launcher/node_modules/phantomjs-prebuilt/lib/phantom
  Writing location.js file
  Done. Phantomjs binary available at /home/vagrant/node_modules/karma-phantomjs-launcher/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs

  > phantomjs@2.1.7 install /home/vagrant/node_modules/phantomjs
  > node install.js

  PhantomJS not found on PATH
  Download already available at /tmp/phantomjs/phantomjs-2.1.1-linux-x86_64.tar.bz2
  Verified checksum of previously downloaded file
  Extracting tar contents (via spawned process)
  Removing /home/vagrant/node_modules/phantomjs/lib/phantom
  Copying extracted folder /tmp/phantomjs/phantomjs-2.1.1-linux-x86_64.tar.bz2-extract-1522948783045/phantomjs-2.1.1-linux-x86_64 -> /home/vagrant/node_modules/phantomjs/lib/phantom
  Writing location.js file
  Done. Phantomjs binary available at /home/vagrant/node_modules/phantomjs/lib/phantom/bin/phantomjs
  npm WARN saveError ENOENT: no such file or directory, open '/home/vagrant/package.json'
  npm notice created a lockfile as package-lock.json. You should commit this file.
  npm WARN enoent ENOENT: no such file or directory, open '/home/vagrant/package.json'
  npm WARN grunt-karma@2.0.0 requires a peer of grunt@>=0.4.x but none is installed. You must install peer dependencies yourself.
  npm WARN vagrant No description
  npm WARN vagrant No repository field.
  npm WARN vagrant No README data
  npm WARN vagrant No license field.
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules/fsevents):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

  + jasmine-core@3.1.0
  + karma-jasmine@1.1.1
  + grunt-karma@2.0.0
  + karma-phantomjs-launcher@1.0.4
  + phantomjs@2.1.7
  + karma@2.0.0
  added 520 packages in 83.716s

git clone https://github.com/introllo/lorry-ui.git
cd lorry-ui/

sed -i 's/'0.10.1'/'0.12.2'/g' package.json
sed -i 's/'0.12.31'/'1.6.0'/g' package.json
sed -i 's/'0.10.0'/'0.12.0'/g' package.json
sed -i 's/'"grunt-ng-annotate": "^0.12.0"'/'"grunt-ng-annotate": "^0.10.0"'/g' package.json

npm install

  npm WARN deprecated grunt-filerev@2.3.1: Deprecated
  npm WARN deprecated connect@2.30.2: connect 2.x series is deprecated
  npm WARN deprecated coffee-script@1.3.3: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
  npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
  npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade
  npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
  npm WARN deprecated constantinople@3.0.2: Please update to at least constantinople 3.1.1
  npm WARN deprecated bower@1.3.12: ...psst! Your project can stop working at any moment because its dependencies can change. Prevent this by migrating to Yarn: https://bower.io/blog/2017/how-to-migrate-away-from-bower/
  npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer
  npm WARN deprecated minimatch@1.0.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
  npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
  npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
  npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
  npm WARN deprecated graceful-fs@2.0.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
  npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
  npm WARN deprecated tough-cookie@2.2.2: ReDoS vulnerability parsing Set-Cookie https://nodesecurity.io/advisories/130
  npm WARN deprecated natives@1.1.2: This module relies on Node.js's internals and will break at some point. Do not use it, and update to graceful-fs@4.x.
  npm WARN deprecated tough-cookie@0.12.1: ReDoS vulnerability parsing Set-Cookie https://nodesecurity.io/advisories/130
  npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
  npm WARN deprecated npmconf@2.1.2: this package has been reintegrated into npm and is now out of date with respect to npm

  > phantomjs@1.9.20 install /home/vagrant/lorry-ui/node_modules/phantomjs
  > node install.js

  PhantomJS not found on PATH
  Downloading https://github.com/Medium/phantomjs/releases/download/v1.9.19/phantomjs-1.9.8-linux-x86_64.tar.bz2
  Saving to /tmp/phantomjs/phantomjs-1.9.8-linux-x86_64.tar.bz2
  Receiving...
    [================================--------] 79%
  Received 12854K total.
  Extracting tar contents (via spawned process)
  Removing /home/vagrant/lorry-ui/node_modules/phantomjs/lib/phantom
  Copying extracted folder /tmp/phantomjs/phantomjs-1.9.8-linux-x86_64.tar.bz2-extract-1522950039981/phantomjs-1.9.8-linux-x86_64 -> /home/vagrant/lorry-ui/node_modules/phantomjs/lib/phantom
  Writing location.js file
  Done. Phantomjs binary available at /home/vagrant/lorry-ui/node_modules/phantomjs/lib/phantom/bin/phantomjs

  > gifsicle@3.0.4 postinstall /home/vagrant/lorry-ui/node_modules/gifsicle
  > node lib/install.js

    ✔ gifsicle pre-build test passed successfully

  > jpegtran-bin@3.2.0 postinstall /home/vagrant/lorry-ui/node_modules/jpegtran-bin
  > node lib/install.js

    ✔ jpegtran pre-build test passed successfully

  > optipng-bin@3.1.4 postinstall /home/vagrant/lorry-ui/node_modules/optipng-bin
  > node lib/install.js

    ✔ optipng pre-build test passed successfully
  npm notice created a lockfile as package-lock.json. You should commit this file.
  npm WARN lorry@0.0.0 No license field.
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules/fsevents):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

  added 1215 packages in 51.192s

bower install

  bower angular-resource#^1.3.0       not-cached https://github.com/angular/bower-angular-resource.git#^1.3.0
  bower angular-resource#^1.3.0          resolve https://github.com/angular/bower-angular-resource.git#^1.3.0
  bower angular-konami#~0.0.2         not-cached https://github.com/lucasconstantino/angular-konami.git#~0.0.2
  bower angular-konami#~0.0.2            resolve https://github.com/lucasconstantino/angular-konami.git#~0.0.2
  bower ng-lodash#~0.2.0              not-cached https://github.com/rockabox/ng-lodash.git#~0.2.0
  bower ng-lodash#~0.2.0                 resolve https://github.com/rockabox/ng-lodash.git#~0.2.0
  bower angular-mocks#^1.3.0          not-cached https://github.com/angular/bower-angular-mocks.git#^1.3.0
  bower angular-mocks#^1.3.0             resolve https://github.com/angular/bower-angular-mocks.git#^1.3.0
  bower angular-animate#^1.3.0        not-cached https://github.com/angular/bower-angular-animate.git#^1.3.0
  bower angular-animate#^1.3.0           resolve https://github.com/angular/bower-angular-animate.git#^1.3.0
  bower angular-messages#^1.3.0       not-cached https://github.com/angular/bower-angular-messages.git#^1.3.0
  bower angular-messages#^1.3.0          resolve https://github.com/angular/bower-angular-messages.git#^1.3.0
  bower angular#^1.3.0                not-cached https://github.com/angular/bower-angular.git#^1.3.0
  bower angular#^1.3.0                   resolve https://github.com/angular/bower-angular.git#^1.3.0
  bower js-yaml#~3.2.7                not-cached https://github.com/nodeca/js-yaml.git#~3.2.7
  bower js-yaml#~3.2.7                   resolve https://github.com/nodeca/js-yaml.git#~3.2.7
  bower ng-clip#~0.2.6                not-cached https://github.com/asafdav/ng-clip.git#~0.2.6
  bower ng-clip#~0.2.6                   resolve https://github.com/asafdav/ng-clip.git#~0.2.6
  bower zeroclipboard#~2.2.0          not-cached https://github.com/zeroclipboard/zeroclipboard.git#~2.2.0
  bower zeroclipboard#~2.2.0             resolve https://github.com/zeroclipboard/zeroclipboard.git#~2.2.0
  bower titip#*                       not-cached https://github.com/quantumui/titip.git#*
  bower titip#*                          resolve https://github.com/quantumui/titip.git#*
  bower ngDialog#~0.3.11              not-cached https://github.com/likeastore/ngDialog.git#~0.3.11
  bower ngDialog#~0.3.11                 resolve https://github.com/likeastore/ngDialog.git#~0.3.11
  bower jquery#~2.1.3                 not-cached https://github.com/jquery/jquery-dist.git#~2.1.3
  bower jquery#~2.1.3                    resolve https://github.com/jquery/jquery-dist.git#~2.1.3
  bower angular-cookies#^1.3.0        not-cached https://github.com/angular/bower-angular-cookies.git#^1.3.0
  bower angular-cookies#^1.3.0           resolve https://github.com/angular/bower-angular-cookies.git#^1.3.0
  bower angular-filter#~0.5.2         not-cached https://github.com/a8m/angular-filter.git#~0.5.2
  bower angular-filter#~0.5.2            resolve https://github.com/a8m/angular-filter.git#~0.5.2
  bower angular-sanitize#^1.3.0       not-cached https://github.com/angular/bower-angular-sanitize.git#^1.3.0
  bower angular-sanitize#^1.3.0          resolve https://github.com/angular/bower-angular-sanitize.git#^1.3.0
  bower angular-konami#~0.0.2           download https://github.com/lucasconstantino/angular-konami/archive/0.0.2.tar.gz
  bower ng-lodash#~0.2.0                download https://github.com/rockabox/ng-lodash/archive/0.2.3.tar.gz
  bower angular-resource#^1.3.0         download https://github.com/angular/bower-angular-resource/archive/v1.6.9.tar.gz
  bower angular-mocks#^1.3.0            download https://github.com/angular/bower-angular-mocks/archive/v1.6.9.tar.gz
  bower angular-animate#^1.3.0          download https://github.com/angular/bower-angular-animate/archive/v1.6.9.tar.gz
  bower ng-clip#~0.2.6                  download https://github.com/asafdav/ng-clip/archive/0.2.6.tar.gz
  bower js-yaml#~3.2.7                  download https://github.com/nodeca/js-yaml/archive/3.2.7.tar.gz
  bower angular-messages#^1.3.0         download https://github.com/angular/bower-angular-messages/archive/v1.6.9.tar.gz
  bower angular#^1.3.0                  download https://github.com/angular/bower-angular/archive/v1.6.9.tar.gz
  bower jquery#~2.1.3                   download https://github.com/jquery/jquery-dist/archive/2.1.4.tar.gz
  bower ngDialog#~0.3.11                download https://github.com/likeastore/ngDialog/archive/0.3.12.tar.gz
  bower titip#*                         download https://github.com/quantumui/titip/archive/master.tar.gz
  bower zeroclipboard#~2.2.0            download https://github.com/zeroclipboard/zeroclipboard/archive/v2.2.0.tar.gz
  bower angular-konami#~0.0.2            extract archive.tar.gz
  bower angular-cookies#^1.3.0          download https://github.com/angular/bower-angular-cookies/archive/v1.6.9.tar.gz
  bower angular-filter#~0.5.2           download https://github.com/a8m/angular-filter/archive/v0.5.17.tar.gz
  bower ng-lodash#~0.2.0                 extract archive.tar.gz
  bower angular-sanitize#^1.3.0         download https://github.com/angular/bower-angular-sanitize/archive/v1.6.9.tar.gz
  bower angular-konami#~0.0.2           resolved https://github.com/lucasconstantino/angular-konami.git#0.0.2
  bower ng-lodash#~0.2.0                resolved https://github.com/rockabox/ng-lodash.git#0.2.3
  bower angular#>=1.2                 not-cached https://github.com/angular/bower-angular.git#>=1.2
  bower angular#>=1.2                    resolve https://github.com/angular/bower-angular.git#>=1.2
  bower angular#>=1.2                   download https://github.com/angular/bower-angular/archive/v1.6.9.tar.gz
  bower angular-resource#^1.3.0          extract archive.tar.gz
  bower angular-resource#^1.3.0         resolved https://github.com/angular/bower-angular-resource.git#1.6.9
  bower ng-clip#~0.2.6                   extract archive.tar.gz
  bower angular-messages#^1.3.0          extract archive.tar.gz
  bower ngDialog#~0.3.11                 extract archive.tar.gz
  bower titip#*                          extract archive.tar.gz
  bower ng-clip#~0.2.6                  resolved https://github.com/asafdav/ng-clip.git#0.2.6
  bower angular#>=1.0.4               not-cached https://github.com/angular/bower-angular.git#>=1.0.4
  bower angular#>=1.0.4                  resolve https://github.com/angular/bower-angular.git#>=1.0.4
  bower angular#>=1.0.4                 download https://github.com/angular/bower-angular/archive/v1.6.9.tar.gz
  bower angular-animate#^1.3.0           extract archive.tar.gz
  bower angular-mocks#^1.3.0             extract archive.tar.gz
  bower angular-messages#^1.3.0         resolved https://github.com/angular/bower-angular-messages.git#1.6.9
  bower zeroclipboard#~2.2.0             extract archive.tar.gz
  bower angular-mocks#^1.3.0            resolved https://github.com/angular/bower-angular-mocks.git#1.6.9
  bower angular-animate#^1.3.0          resolved https://github.com/angular/bower-angular-animate.git#1.6.9
  bower ngDialog#~0.3.11            invalid-meta for:/tmp/vagrant/bower/195c3e0137369adf096fb038dd504a2d-17417-WgewlA/bower.json
  bower ngDialog#~0.3.11            invalid-meta The "name" is recommended to be lowercase, can contain digits, dots, dashes
  bower ngDialog#~0.3.11            invalid-meta The "main" field has to contain only 1 file per filetype; found multiple .css files: ["css/ngDialog.css","css/ngDialog-theme-default.css"]
  bower angular#^1.3.0                   extract archive.tar.gz
  bower ngDialog#~0.3.11                resolved https://github.com/likeastore/ngDialog.git#0.3.12
  bower jquery#~2.1.3                    extract archive.tar.gz
  bower titip#*                         resolved https://github.com/quantumui/titip.git#397fd324d5
  bower angular#^1.3.0                  resolved https://github.com/angular/bower-angular.git#1.6.9
  bower zeroclipboard#~2.2.0        invalid-meta for:/tmp/vagrant/bower/a548dc9ab07e3f911d2d98f019e9515f-17417-l3fjEX/bower.json
  bower zeroclipboard#~2.2.0        invalid-meta The "description" is too long, the limit is 140 characters
  bower angular-cookies#^1.3.0           extract archive.tar.gz
  bower zeroclipboard#~2.2.0            resolved https://github.com/zeroclipboard/zeroclipboard.git#2.2.0
  bower angular-cookies#^1.3.0          resolved https://github.com/angular/bower-angular-cookies.git#1.6.9
  bower jquery#~2.1.3                   resolved https://github.com/jquery/jquery-dist.git#2.1.4
  bower js-yaml#~3.2.7                   extract archive.tar.gz
  bower angular-filter#~0.5.2            extract archive.tar.gz
  bower angular-sanitize#^1.3.0          extract archive.tar.gz
  bower angular-sanitize#^1.3.0         resolved https://github.com/angular/bower-angular-sanitize.git#1.6.9
  bower angular-filter#~0.5.2           resolved https://github.com/a8m/angular-filter.git#0.5.17
  bower angular#>=1.2                    extract archive.tar.gz
  bower angular#>=1.2                   resolved https://github.com/angular/bower-angular.git#1.6.9
  bower js-yaml#~3.2.7                  resolved https://github.com/nodeca/js-yaml.git#3.2.7
  bower angular#>=1.0.4                  extract archive.tar.gz
  bower angular#>=1.0.4                 resolved https://github.com/angular/bower-angular.git#1.6.9
  bower angular-konami#~0.0.2            install angular-konami#0.0.2
  bower ng-lodash#~0.2.0                 install ng-lodash#0.2.3
  bower angular-resource#^1.3.0          install angular-resource#1.6.9
  bower ng-clip#~0.2.6                   install ng-clip#0.2.6
  bower angular-messages#^1.3.0          install angular-messages#1.6.9
  bower angular-mocks#^1.3.0             install angular-mocks#1.6.9
  bower angular-animate#^1.3.0           install angular-animate#1.6.9
  bower ngDialog#~0.3.11                 install ngDialog#0.3.12
  bower titip#*                          install titip#397fd324d5
  bower angular#1.6.9                    install angular#1.6.9
  bower zeroclipboard#~2.2.0             install zeroclipboard#2.2.0
  bower angular-cookies#^1.3.0           install angular-cookies#1.6.9
  bower jquery#~2.1.3                    install jquery#2.1.4
  bower angular-sanitize#^1.3.0          install angular-sanitize#1.6.9
  bower angular-filter#~0.5.2            install angular-filter#0.5.17
  bower js-yaml#~3.2.7                   install js-yaml#3.2.7

  angular-konami#0.0.2 bower_components/angular-konami

  ng-lodash#0.2.3 bower_components/ng-lodash
  └── angular#1.6.9

  angular-resource#1.6.9 bower_components/angular-resource
  └── angular#1.6.9

  ng-clip#0.2.6 bower_components/ng-clip
  ├── angular#1.6.9
  └── zeroclipboard#2.2.0

  angular-messages#1.6.9 bower_components/angular-messages
  └── angular#1.6.9

  angular-mocks#1.6.9 bower_components/angular-mocks
  └── angular#1.6.9

  angular-animate#1.6.9 bower_components/angular-animate
  └── angular#1.6.9

  ngDialog#0.3.12 bower_components/ngDialog
  └── angular#1.6.9

  titip#397fd324d5 bower_components/titip

  angular#1.6.9 bower_components/angular

  zeroclipboard#2.2.0 bower_components/zeroclipboard

  angular-cookies#1.6.9 bower_components/angular-cookies
  └── angular#1.6.9

  jquery#2.1.4 bower_components/jquery

  angular-sanitize#1.6.9 bower_components/angular-sanitize
  └── angular#1.6.9

  angular-filter#0.5.17 bower_components/angular-filter
  └── angular#1.6.9

  js-yaml#3.2.7 bower_components/js-yaml


grunt test
grunt
grunt serve (--force)
  
  Running "connect:livereload" (connect) task
  Started connect web server on http://localhost:9000

  Running "watch" task
  Waiting...


