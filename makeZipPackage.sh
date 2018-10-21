#!/bin/bash
$version=$1

zip -r UrlAndTitleCopier-$version.zip * -x dist/* -x UrlAndTitleCopier.iml -x updateDist.sh -x .* -x ./*/.DS_Store