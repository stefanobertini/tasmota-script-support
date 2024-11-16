# Change Log

All notable changes to the "tasmota-uploader" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## [1.0.5] - 2024-11-16
### Fixed
- [Issue #11](https://github.com/stefanobertini/tasmota-script-support/issues/11) Incorrect CFLF management

## [1.0.4] - 2024-11-15

### Added
-  [Issue #4](https://github.com/stefanobertini/tasmota-script-support/issues/4) Manage display related commands, including >d code section enhancement  
Added the management of >d section, as described in the [Universal Display Driver](https://tasmota.github.io/docs/Universal-Display-Driver/#universal-display-driver-udisplay) documentation as well as the [Display Commands](https://tasmota.github.io/docs/Displays/).

## [1.0.3] - 2024-11-15

### Fixed
- [Issue #3](https://github.com/stefanobertini/tasmota-script-support/issues/3) Stripping comments also removes lines where there is a semicolon somewhere bug  

Modified the comment removal function to delete only comments starting at the beginning of the line.
It’s a compromise that allows for simple handling of script sections where ```;``` is a valid character.

### Added
- [Issue #5](https://github.com/stefanobertini/tasmota-script-support/issues/5 ) Always convert line endings to LF  
Modified the upload phase to always strip CR from line endings.

## [1.0.2] - 2024-11-05

### Fixed
- Added "Syntax Highlighting" section in readme.md


## [1.0.1] - 2024-10-28

### Fixed
- Changed wrong image in readme.md


## [1.0.0] - 2024-10-28

### Added

- Initial release