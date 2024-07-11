import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  accordion: {
    gap: 10,
  },
  compactAccordion: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: '#FFF',
    gap: 0,
    borderRadius: 5,
    overflow: 'hidden',
  },
  accordionItem: {
    overflow: 'hidden',
  },
  noCompactAccordionItem: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  header: {
    padding: 15,
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    borderTopColor: '#CECECE',
    borderTopWidth: 1,
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#000',
  },
  headerSubTitle: {
    color: '#C3C3C3',
    fontSize: 12,
  },
  headerIcon: {},
  contentContainer: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    padding: 15,
    paddingTop: 0,
  },
  noBorderTop: {
    borderTopWidth: 0,
  },
});

export default styles;
