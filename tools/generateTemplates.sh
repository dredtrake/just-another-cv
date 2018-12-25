#!/bin/sh
src='../templates/'
dest='../app/js/templates/'
echo -e 'start building templates.\n'
echo -e 'from: \e[32m'$src'\e[0m'
echo -e 'to: \e[32m'$dest'\e[0m\n'
cd $src
LIST='experiences head header modal skills'
for i in $LIST
do
	echo -e 'using: \e[32m'$i'.tmpl\e[0m '
	echo -e 'to generate: \e[32m'$i'.tmpl.js\e[0m\n'
	handlebars $i'.tmpl' -f $dest$i'.tmpl.js'
done
echo 'done'