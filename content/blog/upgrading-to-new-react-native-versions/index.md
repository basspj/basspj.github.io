---
title: Upgrading to new React Native versions
tag: Code
date: "2019-03-15T10:00:00.000Z"
description: TLDR; upgrade react , react-native dependency and handle Breaking Changes in Project Template (with rn-diff-purge), React Native API (with react-native-release changelog) and 3rd-Party Library
---

> ***TLDR;*** upgrade `react` , `react-native` dependency and handle ***Breaking Changes*** in ***Project Template*** (with `rn-diff-purge`), ***React Native API*** (with `react-native-release` changelog) and ***3rd-Party Library***

# Upgrade React Native dependency

- upgrade `react-native` version
- upgrade react version (also relative dependency such as `react-test-renderer`)
use react version the same version as `react-native` peerDependencies

you can find the `react-native` peerDependencies via this link
https://github.com/facebook/react-native/blob/0.xx-stable/package.json

for example; version 0.59
https://github.com/facebook/react-native/blob/0.59-stable/package.json

After upgrade React Native dependency, there are some changes that might cause the ***Breaking Changes***


# Breaking Changes

Breaking Changes is the changes that not compatible with existing code

Or simply said that application will stop working, if you not apply/follow this changes

Breaking Changes can affect existing code in any files; JavaScript code, Native code [Java/Objective C], or config files

You should check/concern about Breaking Changes in these sections

Project Template, React Native API and 3rd-party Library


# Project Template

Project Template is

>files that are normally generated when you run `react-native init`, like the iOS and the Android sub-projects.
>
>(https://facebook.github.io/react-native/docs/upgrading#2-upgrade-your-project-templates)


## Upgrade with react-native-cli

***command-line*** that will automatically upgrade the files, with following condition.

>If there is a new file in the template, it is simply created.
>
>If a file in the template is identical to your file, it is skipped.
>
>If a file is different in your project than the template, you will be prompted; you have options to keep your file or overwrite it with the template version.

    react-native upgrade
    # for latest version
    
    react-native upgrade 0.59.0
    # for specific version`


## Upgrade with rn-diff-purge [recommended]

***repo*** that diff ***Project Template*** files between current and target version, So you can manually apply the changes.

https://github.com/react-native-community/rn-diff-purge/compare/version/0.xx.x...version/0.yy.y

for example; 0.57.5 to 0.59.0

https://github.com/react-native-community/rn-diff-purge/compare/version/0.57.5...version/0.59.0


# React Native API

Look at ***react-native-release***’s changelog 
(https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md)

Under `react-native` between current and target version, search for word ***`BREAKING`*** or `Breaking`

***Tips***: Replace multiple code changes with ***regex*** is the best way


# 3rd-party Library

Basically, if there is a new release of `react-native` version, 3rd-party library will update own library to follow new React Native API, So it may also change the library API.

So upgrade library to match target `react-native` version and follow an instruction is enough.

But, if use the library is still found the error, So you need to check the library repo’s issues section and apply the workaround by yourself

***Tips***: If you want to manually patch/fix the library, I recommended to use patch-package, it’s more easily than entirely fork the library, but have to commit the patches files instead


# References

[Upgrading to new React Native versions](https://facebook.github.io/react-native/docs/upgrading)

[rn-diff-purge](https://github.com/react-native-community/rn-diff-purge)

[react-native-release changelog](https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md)

[patch-package](https://github.com/ds300/patch-package)
